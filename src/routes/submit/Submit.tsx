import { useState } from "react";

export default function Submit() {
  const [formData, setFormData] = useState<{
    email?: string;
    program?: string;
    table?: string;
  }>({});

  const submitForm = async () => {
    const baseURL = "https://api.pokerbot.dk";

    if (!formData.email || !formData.program || !formData.table) {
      throw new Error("Missing Fields in form");
    }

    try {
      await fetch(
        baseURL +
          "/upload/" +
          formData.table +
          "/" +
          formData.email +
          formData.program,
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      alert("File Uploaded successfully");
      window.location.href = "/";
    } catch (error) {
      alert("An error occurred: " + error);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-col gap-8 bg-base-200 p-8 rounded-lg">
        <fieldset className="fieldset flex flex-col gap-1">
          <legend className="fieldset-legend">Your Email: </legend>
          <input
            className="input"
            type="email"
            placeholder="your@mail.here"
            onChange={(e) => {
              setFormData(Object.assign(formData, { email: e.target.value }));
            }}
          />
          <legend className="fieldset-legend">Your Program </legend>
          <input
            className="file-input"
            type="file"
            accept=".py, .java"
            onChange={(e) => {
              setFormData(Object.assign(formData, { program: e.target.value }));
            }}
          />
          <legend className="fieldset-legend">Your Program </legend>
          <select
            className="select"
            onChange={(e) => {
              setFormData(Object.assign(formData, { table: e.target.value }));
            }}
          >
            <option value="1">Table 1</option>
            <option value="2">Table 2</option>
            <option value="3">Table 3</option>
            <option value="4">Table 4</option>
            <option value="5">Table 5</option>
            <option value="6">Table 6</option>
            <option value="7">Table 7</option>
            <option value="8">Table 8</option>
            <option value="9">Table 9</option>
            <option value="10">Table 10</option>
          </select>
        </fieldset>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            submitForm();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
