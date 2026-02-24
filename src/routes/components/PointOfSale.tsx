import communityImage from "../../assets/community.jpg";
import community2Image from "../../assets/community2.jpg";
import freeImage from "../../assets/free.png";

export default function PointOfSale() {
  return (
    <div className="flex-down items-center p-8 gap-32 min-h-[50vh]">
      <div className="w-full lg:w-3/4 relative">
        <div className="absolute h-full w-2/3 left-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-r from-transparent to-base-100" />
          <img src={communityImage} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down items-end z-10 p-4">
          <h3 className="font-display-alternative text-6xl text-primary">
            Join our Community
          </h3>
          <p>
            Something about the fact that it is really fun to do this with{" "}
            <br />
            people and be part of a community
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/4 relative">
        <div className="absolute h-full w-2/3 right-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-l from-transparent to-base-100" />
          <img src={freeImage} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down z-10 p-4">
          <h3 className="font-display-alternative text-6xl text-primary">
            It's absolutely free!
          </h3>
          <p>
            There's absolutely no barrier to entry. <br />
            Other than the price of beer and soda when coding.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-3/4 relative">
        <div className="absolute h-full w-2/3 left-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-r from-transparent to-base-100" />
          <img src={community2Image} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down items-end z-10 p-4">
          <h3 className="font-display-alternative text-6xl text-primary">
            Not convinced?
          </h3>
          <p>Then I actually dont know what to say</p>
        </div>
      </div>
    </div>
  );
}
