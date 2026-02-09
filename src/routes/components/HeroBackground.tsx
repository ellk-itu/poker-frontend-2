import backgroundImage from "../../assets/IMG_2584 1.png";

export default function HeroBackground() {
  return (
    <div className="absolute h-[120%] w-full left-0 top-0">
      <div className="absolute h-full w-full left-0 bg-linear-to-b from-transparent to-base-100" />
      <img src={backgroundImage} className="h-full w-full object-cover" />
    </div>
  );
}
