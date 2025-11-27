import { Link } from "react-router";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4">
      <h1>Poker Bot</h1>
      <div className="flex flex-col gap-2">
        <Link to={"/sign-up"} className="btn">
          Sign Up
        </Link>
        <Link to={"/get-started"} className="btn">
          Get Started
        </Link>
        <Link to={"/documentation"} className="btn">
          Documentation
        </Link>
        <Link to={"/submit"} className="btn">
          Submit Your Bot
        </Link>
        <Link to={"/previous-events"} className="btn">
          Previous Events
        </Link>
      </div>
    </div>
  );
}
