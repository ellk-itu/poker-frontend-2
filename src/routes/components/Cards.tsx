import CodeIcon from "../../assets/codeIcon.svg?react";
import PokerIcon from "../../assets/pokerIcon.svg?react";
import BeerIcon from "../../assets/beerIcon.svg?react";
import { Link } from "react-router";

export default function Cards() {
  return (
    <div className="flex-down gap-8 p-4 lg:p-16 z-10 min-h-[50vh] lg:flex-row max-w-screen">
      <div className="bg-base-200 flex-1 p-8 rounded-2xl flex flex-col gap-4">
        <CodeIcon
          height={80}
          width={80}
          className="self-end fill-base-content"
        />
        <p className="font-text font-bold text-4xl m-0">
          Show Off Your Algorithmic Prowess
        </p>
        <p>
          Test your skills against other ITU students by creating a
          poker-playing algorithm, and use it to battle it on our homemade
          server.
        </p>
        <p>
          Languages include ones you&#0027;ve (probably) already encountered. We
          have documentation in both Python and Java for the lowest barrier to
          entry
        </p>
        <div className="flex flex-1 items-end justify-end py-8">
          <Link
            to={"/documentation"}
            className="link link-primary text-xl font-bold btn-lg"
          >
            {"See our Documentation >"}
          </Link>
        </div>
      </div>
      <div className="bg-base-200 flex-1 py-8 px-16 rounded-2xl flex flex-col gap-4">
        <PokerIcon
          height={80}
          width={80}
          className="self-end fill-base-content"
        />
        <p className="font-text font-bold text-4xl m-0">
          A Classic Game of No Limit Texas Holdem
        </p>
        <p>
          You and your robot will be playing standard games of No Limit Texas
          Holdem on our digital pokertable.
        </p>
        <p>
          And if you aren't familar with Texas Holdem, worry not. There's plenty
          of resources and people willing to help if you're ever stuck
        </p>
        <div className="flex flex-1 items-end justify-end py-8">
          <p className="link link-primary text-xl font-bold btn-lg">
            <a href="https://adventuregamers.com/guides/texas-holdem-rules">
              {"See the Texas Holdem Rules >"}
            </a>
          </p>
        </div>
      </div>
      <div className="bg-primary text-primary-content flex-1 p-8 rounded-2xl flex flex-col gap-4">
        <BeerIcon
          height={80}
          width={80}
          className="self-end fill-primary-content"
        />
        <p className="font-text font-bold text-4xl m-0">
          Win Prices, Drink Beer, and Have Fun
        </p>
        <p>
          Test your skills against other ITU students by creating a
          poker-playing algorithm, and use it to battle it on our homemade
          server.
        </p>
        <p>
          Languages include ones you&#0027;ve (probably) already encountered. We
          offer documentation in both Python and Java for the lowest barrier to
          entry
        </p>
        <div className="flex flex-1 items-end justify-center py-8">
          <Link to={"/sign-up"} className="btn btn-lg">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}
