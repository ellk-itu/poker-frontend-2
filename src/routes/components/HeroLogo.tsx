import QuackSound from "../../assets/quack.mp3";

export default function HeroLogo() {
  const quackAudio = new Audio(QuackSound);
  return (
    <div className="flex flex-col">
      <p className="font-display-alternative text-4xl md:text-6xl m-0">
        Poker{" "}
        <span className="text-primary" onClick={() => quackAudio.play()}>
          Bot
        </span>
      </p>
      <p className="font-display text-6xl md:text-8xl/[0.6]">Battles</p>
    </div>
  );
}
