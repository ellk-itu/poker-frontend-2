import { Link, Outlet } from "react-router";
import LightModeIcon from "../assets/lightMode.svg?react";
import NightModeIcon from "../assets/nightMode.svg?react";
import { useEffect, useState } from "react";

export default function Layout() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") == "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    localStorage.setItem("theme", currentTheme ? "dark" : "light");

    document
      .querySelector("html")
      ?.setAttribute("data-theme", currentTheme ? "dark" : "light");
  }, [currentTheme]);

  return (
    <div className="m-0 min-h-screen flex flex-col">
      <header className="flex px-8 py-4 bg-base-200 items-center z-50">
        <Link to={"/"} className="flex-1 font-display m-0 h-fit">
          Poker <span className="text-primary">Bot</span> Battles
        </Link>
        <div className="flex gap-2">
          <Link to={"/sign-up"} target="_blank" className="btn btn-primary">
            Sign Up
          </Link>
          <Link to={"/get-started"} className="btn btn-neutral">
            Get Started
          </Link>
          <Link to={"/documentation"} className="btn btn-neutral">
            Documentation
          </Link>
          <Link to={"/submit"} className="btn btn-neutral">
            Submit Your Bot
          </Link>
          <Link to={"/admin-panel"} className="btn btn-neutral">
            Login
          </Link>
          <label className="swap swap-rotate px-4">
            <input
              type="checkbox"
              checked={!currentTheme}
              onClick={() => {
                setCurrentTheme(!currentTheme);
              }}
            />
            <LightModeIcon className="swap-on h-7 aspect-square fill-base-content" />
            <NightModeIcon className="swap-off h-7 aspect-square fill-base-content" />
          </label>
        </div>
      </header>
      <main className="bg-base-100 flex-1 flex">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}
