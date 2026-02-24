import React, { useContext, useEffect, useState } from "react";
import { alertContext } from "../../common/useAlert/Alert";
import { getTable, getTables, healthCheck } from "./serverWrapper";

export default function AdminPanel() {
  const apiKey = localStorage.getItem("api-key") ?? "";

  const alert = useContext(alertContext);
  const [tables, setTables] = useState<Record<string, any>>();

  console.log(apiKey);

  console.log(tables);

  useEffect(() => {
    getTables().then(console.log);

    // const loadTables = async () => {
    //   try {
    //     const tables = await getTables(apiKey);
    //     setTables(tables);
    //   } catch (error) {
    //     alert("error", error as string);
    //   }
    // };

    // loadTables();
  }, [apiKey, alert]);

  // const isNumber = (n: string) => !isNaN(parseInt(n));

  // const renderTable = () => {
  //   const tableElements: React.ReactNode[] = [];

  //   const renderFiles = (table: string[]) => {
  //     const renderTableFileElements: React.ReactNode[] = [];

  //     for (const filename of table) {
  //       renderTableFileElements.push(
  //         <li>
  //           <p>{filename}</p>
  //           <button
  //             className="btn btn-neutral"
  //             onClick={() => {
  //               moveFile(filename);
  //             }}
  //           >
  //             Move
  //           </button>
  //           <button
  //             className="btn btn-neutral"
  //             onClick={() => {
  //               deleteFile(filename);
  //             }}
  //           >
  //             Delete
  //           </button>
  //         </li>,
  //       );
  //     }

  //     return renderTableFileElements;
  //   };

  //   for (const tableName in tables) {
  //     tableElements.push(
  //       <div className="" key={tableName}>
  //         <h2>{`Table: ${tableName}`}</h2>
  //         <button
  //           className="btn btn-primary"
  //           onClick={() => {
  //             runTable(tableName);
  //           }}
  //         >
  //           Run Table
  //         </button>
  //         <p>Files</p>
  //         <ul>{renderFiles(tables[tableName])}</ul>
  //       </div>,
  //     );
  //   }

  //   return tableElements;
  // };

  // // Popup that asks for table number to move file to another table
  // function popup(fromTable, fileName) {
  //   let toTable = prompt("Please enter table number", "###").toLowerCase();
  //   if (toTable != null && isNumber(toTable)) {
  //     moveFile(fromTable, toTable, fileName);
  //   } else {
  //     alert("Invalid table number not a number");
  //   }
  // }

  // async function moveFile(fromTable, toTable, fileName) {
  //   await fetch(`${backendUrl}/move/${fromTable}/${fileName}/${toTable}`, {
  //     method: "PUT",
  //     headers: {
  //       "X-API-KEY": apiKey,
  //     },
  //   });
  //   getTables();
  // }

  // async function deleteFile(tableName, fileName) {
  //   var confirmDelete = confirm(
  //     `Are you sure you want to delete ${fileName} from ${tableName}?`,
  //   );
  //   if (!confirmDelete) return;
  //   await fetch(`${backendUrl}/delete/${tableName}/${fileName}`, {
  //     method: "Delete",
  //     headers: {
  //       "X-API-KEY": apiKey,
  //     },
  //   });
  //   getTables();
  // }

  // async function setTime() {
  //   const time = document.getElementById("timeInputField").value;
  //   await fetch(`${backendUrl}/set-time?time=${time}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-API-KEY": apiKey,
  //     },
  //   });
  //   document.getElementById("timeInputField").value = "";
  //   getTime();
  // }

  // async function getTime() {
  //   const timeField = document.getElementById("currentTime");

  //   const resp = await fetch(`${backendUrl}/get-time`);
  //   const time = await resp.text();
  //   timeField.textContent = "Time: " + time;
  // }

  // async function runTable(tableName, numberOfWinners = 1) {
  //   const winnersPrTable =
  //     document.getElementById("winnersInputField").value || numberOfWinners;
  //   await fetch(`${backendUrl}/run/${tableName}/${winnersPrTable}`, {
  //     method: "GET",
  //     headers: {
  //       "X-API-KEY": apiKey,
  //     },
  //   });
  //   getTables();
  // }

  // getTime();
  // getTables();

  // return (
  //   <>
  //     <div className="tables">{renderTable()}</div>
  //     {errorMessage ? (
  //       <div className="alert alert-error">{errorMessage}</div>
  //     ) : (
  //       <></>
  //     )}
  //   </>
  // );
  return <></>;
}
