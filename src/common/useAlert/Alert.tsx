import { createContext } from "react";
export type AlertData = {
  type: "info" | "warning" | "error";
  message: string;
};

export type AlertFunctionType = (
  type: AlertData["type"],
  message: AlertData["message"],
) => void;

export const alertContext = createContext<AlertFunctionType>(() => {});
