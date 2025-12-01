import React, { useEffect, useState } from "react";

export default function AdminPanel() {
  const backendUrl = "https://api.pokerbot.dk";
  const apiKey = localStorage.getItem("api-key") ?? "";

  const [errorMessage, setErrorMessage] = useState<string>();
  const [tables, setTables] = useState<Record<string, any>>();

  useEffect(() => {
    loadTables();
  }, []);

  const isNumber = (n: string) => !isNaN(parseInt(n));

  const loadTables = async () => {
    const resp = await fetch(backendUrl + "/files", {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
    });

    if (resp.status != 200) {
      setErrorMessage(await resp.text());
    }

    setTables(await resp.json());
  };

  const renderTable = () => {
    const tableElements: React.ReactNode[] = [];

    const renderFiles = (table: string[]) => {
      const renderTableFileElements: React.ReactNode[] = [];

      for (const filename of table) {
        renderTableFileElements.push(
          <li>
            <p>{filename}</p>
            <button
              className="btn btn-neutral"
              onClick={() => {
                moveFile(filename);
              }}
            >
              Move
            </button>
            <button
              className="btn btn-neutral"
              onClick={() => {
                deleteFile(filename);
              }}
            >
              Delete
            </button>
          </li>
        );
      }

      return renderTableFileElements;
    };

    for (const tableName in tables) {
      tableElements.push(
        <div className="" key={tableName}>
          <h2>{`Table: ${tableName}`}</h2>
          <button
            className="btn btn-primary"
            onClick={() => {
              runTable(tableName);
            }}
          >
            Run Table
          </button>
          <p>Files</p>
          <ul>{renderFiles(tables[tableName])}</ul>
        </div>
      );
    }

    return tableElements;
  };

  // Popup that asks for table number to move file to another table
  function popup(fromTable, fileName) {
    let toTable = prompt("Please enter table number", "###").toLowerCase();
    if (toTable != null && isNumber(toTable)) {
      moveFile(fromTable, toTable, fileName);
    } else {
      alert("Invalid table number not a number");
    }
  }

  async function moveFile(fromTable, toTable, fileName) {
    await fetch(`${backendUrl}/move/${fromTable}/${fileName}/${toTable}`, {
      method: "PUT",
      headers: {
        "X-API-KEY": apiKey,
      },
    });
    loadTables();
  }

  async function deleteFile(tableName, fileName) {
    var confirmDelete = confirm(
      `Are you sure you want to delete ${fileName} from ${tableName}?`
    );
    if (!confirmDelete) return;
    await fetch(`${backendUrl}/delete/${tableName}/${fileName}`, {
      method: "Delete",
      headers: {
        "X-API-KEY": apiKey,
      },
    });
    loadTables();
  }

  async function setTime() {
    const time = document.getElementById("timeInputField").value;
    await fetch(`${backendUrl}/set-time?time=${time}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": apiKey,
      },
    });
    document.getElementById("timeInputField").value = "";
    getTime();
  }

  async function getTime() {
    const timeField = document.getElementById("currentTime");

    const resp = await fetch(`${backendUrl}/get-time`);
    const time = await resp.text();
    timeField.textContent = "Time: " + time;
  }

  async function runTable(tableName, numberOfWinners = 1) {
    const winnersPrTable =
      document.getElementById("winnersInputField").value || numberOfWinners;
    await fetch(`${backendUrl}/run/${tableName}/${winnersPrTable}`, {
      method: "GET",
      headers: {
        "X-API-KEY": apiKey,
      },
    });
    loadTables();
  }

  getTime();
  loadTables();

  return (
    <>
      <div className="tables">{renderTable()}</div>
      {errorMessage ? (
        <div className="alert alert-error">{errorMessage}</div>
      ) : (
        <></>
      )}
    </>
  );
}
