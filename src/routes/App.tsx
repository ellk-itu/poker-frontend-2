import { Link } from "react-router";
import backgroundImage from "../assets/IMG_2584 1.png";
import QuackSound from "../assets/quack.mp3";

export default function App() {
  const quackAudio = new Audio(QuackSound);

  return (
    <>
      <div className="absolute h-full w-full left-0 top-0">
        <div className="absolute h-full w-full left-0 bg-linear-to-br from-base-100 to-transparent" />
        <img src={backgroundImage} className="h-full w-full object-cover" />
      </div>
      <div
        className={`flex flex-col justify-center w-screen flex-1 gap-4 px-24 relative`}
      >
        <div className="flex flex-col">
          <p className="font-display-alternative text-6xl m-0">
            Poker{" "}
            <span className="text-primary" onClick={() => quackAudio.play()}>
              Bot
            </span>
          </p>
          <p className="font-display text-8xl/[0.6]">Battles</p>
        </div>
        <p className="text-xl">
          Somthing cool about how cool and <br />
          awsomesauce poker bot is! :3
        </p>
        <div className="flex gap-2">
          <Link to={"/get-started"} className="btn btn-primary btn-lg">
            Get Started
          </Link>
          <Link to={"/documentation"} className="btn btn-primary btn-lg">
            Documentation
          </Link>
        </div>
      </div>
    </>
  );
}
