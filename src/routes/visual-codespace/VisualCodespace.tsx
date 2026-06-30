import { useEffect, useRef, useState } from "react";
import { InitWorkspace } from "./workspace";
import { pythonGenerator } from "blockly/python";
import type { Workspace } from "blockly";
import codeDep from "./codeDep";

const VisualCodespace = () => {
  const workspaceRef = useRef<HTMLDivElement>(null);
  const [botName, setBotName] = useState("");
  const [workspace, setWorkSpace] = useState<Workspace>();

  useEffect(() => {
    if (!workspaceRef.current) return;

    setWorkSpace(InitWorkspace(workspaceRef.current));
  }, [workspaceRef]);

  const downloadCode = () => {
    const generatedCode = pythonGenerator.workspaceToCode(workspace);
    const codeString = codeDep(botName) + "\n  " + generatedCode;
    const element = document.createElement("a");

    // Courtesy of https://stackoverflow.com/questions/3665115/how-to-create-a-file-in-memory-for-user-to-download-but-not-through-server
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(codeString),
    );
    element.setAttribute("download", `${botName}.py`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="block">
      <div className="flex justify-around p-4">
        <div className="">
          <label className="label">Bot Name</label>
          <input
            className="input input-primary"
            type="text"
            placeholder="My Mega Cool Bot"
            onChange={(e) => setBotName(e.target.value)}
            value={botName}
          />
        </div>
        <button className="btn btn-primary" onClick={() => downloadCode()}>
          Download
        </button>
      </div>
      <div className="w-screen max-h-screen h-[150%]" ref={workspaceRef}></div>
    </div>
  );
};

export { VisualCodespace };
