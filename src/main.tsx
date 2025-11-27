import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.tsx";
import Documentation from "./routes/documentation/Documentation.tsx";
import GetStarted from "./routes/get-started/GetStarted.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import SignUp from "./routes/sign-up/SignUp.tsx";
import Submit from "./routes/submit/Submit.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
  },
  {
    path: "/get-started",
    element: <GetStarted />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/submit",
    element: <Submit />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
