import { Link } from "react-router";
import HeroBackground from "./HeroBackground";
import HeroDesc from "./HeroDesc";
import HeroLogo from "./HeroLogo";

export default function Hero() {
  return (
    <div className="relative h-[70vh] shrink-0">
      <HeroBackground />
      <div className="flex-down justify-center w-screen flex-1 gap-4 px-12 lg:px-24 z-10 relative h-full @container">
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
