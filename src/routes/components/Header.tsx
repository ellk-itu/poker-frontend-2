import { Link } from "react-router";
import LightModeIcon from "../../assets/lightMode.svg?react";
import NightModeIcon from "../../assets/nightMode.svg?react";

export default function Header(props: {
  currentTheme: boolean;
  onThemeChange: () => void;
}) {
  return (
    <header className="flex px-8 py-4 bg-base-200 items-center z-50">
      <Link to={"/"} className="flex-1 font-display m-0 h-fit">
        Poker <span className="text-primary">Bot</span> Battles
      </Link>
      <div className="flex gap-2">
        <Link to={"/sign-up"} className="btn btn-primary">
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
        <label className="swap swap-rotate px-4">
          <input
            type="checkbox"
            checked={!props.currentTheme}
            onClick={() => props.onThemeChange()}
          />
          <LightModeIcon className="swap-on h-7 aspect-square fill-base-content" />
          <NightModeIcon className="swap-off h-7 aspect-square fill-base-content" />
        </label>
      </div>
    </header>
  );
}
