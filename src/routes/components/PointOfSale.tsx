import communityImage from "../../assets/community.jpg";
import community2Image from "../../assets/community2.jpg";
import freeImage from "../../assets/free.png";

export default function PointOfSale() {
  return (
    <div className="flex-down items-center p-16 gap-8">
      <div className="w-3/4 relative">
        <div className="absolute h-full w-2/3 left-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-r from-transparent to-base-100" />
          <img src={communityImage} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down gap-8 items-end z-10 p-4">
          <h2 className="font-display-alternative text-6xl text-primary">
            Join our Community
          </h2>
          <p>
            Something about the fact that it is really fun to do this with{" "}
            <br />
            people and be part of a community
          </p>
        </div>
      </div>
      <div className="w-3/4 relative">
        <div className="absolute h-full w-2/3 right-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-l from-transparent to-base-100" />
          <img src={freeImage} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down gap-8 z-10 p-4">
          <h2 className="font-display-alternative text-6xl text-primary">
            It's absolutely free!
          </h2>
          <p>
            Somthing about the fact that it is really fun to do this with <br />
            people and be part of a community
          </p>
        </div>
      </div>
      <div className="w-3/4 relative">
        <div className="absolute h-full w-2/3 left-0 top-0 z-0">
          <div className="absolute h-full w-full left-0 bg-linear-to-r from-transparent to-base-100" />
          <img src={community2Image} className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-down gap-8 items-end z-10 p-4">
          <h2 className="font-display-alternative text-6xl text-primary">
            Another Selling point
          </h2>
          <p>I'm not marketing. I just make websites and have fun :3</p>
        </div>
      </div>
    </div>
  );
}
