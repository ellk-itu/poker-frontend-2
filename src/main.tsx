import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./routes/App.tsx";
import Documentation from "./routes/documentation/Documentation.tsx";
import GetStarted from "./routes/get-started/GetStarted.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUp from "./routes/sign-up/SignUp.tsx";
import Submit from "./routes/submit/Submit.tsx";
import Layout from "./routes/Layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/submit" element={<Submit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
