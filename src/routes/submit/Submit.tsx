import { useContext, useState } from "react";
import { alertContext } from "../../common/useAlert/Alert";
import backgroundImage from "../../assets/IMG_2584 1.png";

export default function Submit() {
  const alert = useContext(alertContext);

  const [formData, setFormData] = useState<{
    email?: string;
    file?: File;
    fileName?: string;
    table?: string;
  }>({});

  const submitForm = async () => {
    const baseURL = "https://api.pokerbot.dk";

    if (!formData.email || !formData.file || !formData.table) {
      throw new Error("Missing Fields in form");
    }

    const data = new FormData();

    data.append("email", formData.email);
    data.append("file", formData.file);
    data.append("table", formData.table);

    const extension = formData.fileName?.endsWith(".py") ? ".py" : ".java";

    try {
      await fetch(
        baseURL +
          "/upload/" +
          formData.table +
          "/" +
          formData.email +
          extension,
        {
          method: "POST",
          body: data,
        },
      );
      alert("info", "File Uploaded successfully");
    } catch (error) {
      alert("error", "An error occurred: " + error);
    }
  };

  return (
    <div className="flex-1 flex min-h-[90vh]">
      <div className="flex-1 flex p-16 items-center justify-center">
        <div className="w-3/5 min-w-sm flex-down gap-8">
          <p className="font-display-alternative text-4xl text-primary w-full">
            Submit Your Bot
          </p>
          <fieldset className="fieldset flex flex-col gap-1">
            <legend className="fieldset-legend">Your Email: </legend>
            <input
              className="input input-lg input-primary w-full"
              type="email"
              placeholder="your@mail.here"
              onChange={(e) => {
                setFormData(Object.assign(formData, { email: e.target.value }));
              }}
            />
            <legend className="fieldset-legend">Your Program </legend>
            <input
              className="file-input input-lg input-primary w-full"
              type="file"
              accept=".py, .java"
              multiple={false}
              onChange={(e) => {
                setFormData(
                  Object.assign({}, formData, {
                    file: (e.target.files as FileList)[0],
                    fileName: e.target.value,
                  }),
                );
              }}
            />
            <legend className="fieldset-legend">Your Program </legend>
            <select
              className="select input-lg input-primary w-full"
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
            className="btn btn-primary btn-lg w-1/3 self-end"
            onClick={() => {
              submitForm();
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="flex-1 h-full relative">
        <img src={backgroundImage} className="h-full object-cover" />
      </div>
    </div>
  );
}
