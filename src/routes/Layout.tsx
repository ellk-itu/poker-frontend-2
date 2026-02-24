import { Link, Outlet } from "react-router";
import { useEffect, useState } from "react";
import AlertProvider from "../common/useAlert/AlertProvider";
import Header from "./components/Header";

// Abstract the header to its own component

export default function Layout() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") == "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  useEffect(() => {
    localStorage.setItem("theme", currentTheme ? "dark" : "light");

    document
      .querySelector("html")
      ?.setAttribute("data-theme", currentTheme ? "dark" : "light");
  }, [currentTheme]);

  return (
    <div className="m-0 min-h-screen flex flex-col">
      <Header
        currentTheme={currentTheme}
        onThemeChange={() => {
          setCurrentTheme(!currentTheme);
        }}
      />
      <AlertProvider>
        <main className="bg-base-100 flex-1 flex">
          <Outlet />
        </main>
      </AlertProvider>
      <footer className="flex p-8 bg-base-200">
        <div className="flex-1">
          <h3>Contact</h3>
          <p className="text-base">pokerbot@itu.dk</p>
          <h3>Projects</h3>
          <p className="text-base">
            <a
              href="https://github.com/poker-bot-battles?view_as=public"
              className="link"
            >
              Pokerbot GitHub
            </a>
          </p>
        </div>
        <div className=""></div>
        <div className="flex-1 flex-down gap-2">
          <h3>Links</h3>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/documentation">
            Documentation
          </Link>
          <Link className="link" to="/get-started">
            Get Started
          </Link>
          <Link className="link" to="/sign-up">
            Sign Up
          </Link>
          <Link className="link" to="/submit">
            Submit Code
          </Link>
          <Link className="link" to="/admin-panel">
            Admin Panel
          </Link>
        </div>
      </footer>
    </div>
  );
}
