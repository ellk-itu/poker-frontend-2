import { Link } from "react-router";
import HeroBackground from "./HeroBackground";
import HeroDesc from "./HeroDesc";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <div className="relative h-5/6">
      <HeroBackground />
      <div className="flex flex-col justify-center w-screen flex-1 gap-4 px-24 z-10 relative h-full">
        <HeroLogo />
        <HeroDesc />
        <div className="flex gap-2">
          <Link to={"/get-started"} className="btn btn-primary btn-lg">
            Get Started
          </Link>
          <Link to={"/documentation"} className="btn btn-primary btn-lg">
            Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
