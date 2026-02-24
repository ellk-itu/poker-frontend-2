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
import ScrollToTop from "./common/ScrollTop.tsx";
import AdminPanel from "./routes/admin-panel/AdminPanel.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
