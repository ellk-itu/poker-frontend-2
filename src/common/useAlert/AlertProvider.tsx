import { useState } from "react";
import { alertContext, type AlertData } from "./Alert";
import { v4 } from "uuid";

export default function AlertProvider(props: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<Record<string, AlertData>>({});
  const DEFAULT_EXPIRATION_MS = 100000;

  const useAlertFunction = (
    type: AlertData["type"],
    message: AlertData["message"],
  ) => {
    const uuid = v4();

    setTimeout(() => {
      setAlerts(Object.assign({}, alerts, { [uuid]: undefined }));
    }, DEFAULT_EXPIRATION_MS);

    setAlerts(
      Object.assign({}, alerts, { [uuid]: { type: type, message: message } }),
    );
  };

  const renderAlertElements = () =>
    Object.keys(alerts).map((alertKey) => (
      <div
        className={`bg-${alerts[alertKey].type} flex justify-center items-center`}
      >
        <p>{alerts[alertKey].message}</p>
      </div>
    ));

  return (
    <alertContext.Provider value={useAlertFunction}>
      {props.children}
      <div className="absolute w-screen h-screen left-0 top-0 pointer-events-none p-16">
        {renderAlertElements()}
      </div>
    </alertContext.Provider>
  );
}
