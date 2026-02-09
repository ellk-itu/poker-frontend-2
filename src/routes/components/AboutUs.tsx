import cat1 from "../../assets/cat1.png";
import cat2 from "../../assets/cat2.png";
import cat3 from "../../assets/cat3.png";
import cat4 from "../../assets/cat4.png";
import cat5 from "../../assets/cat5.png";

export default function AboutUs() {
  return (
    <div className="flex-down w-3/4 self-center py-16">
      <div className="relative flex-down gap-8 items-end z-10 p-4">
        <h2 className="font-display-alternative text-6xl text-primary">
          Who are we?
        </h2>
        <div className="flex w-full gap-8">
          <div className="flex-1 flex-down gap-4">
            <img src={cat1} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Gergely Takács
              </p>
              <p>Role at Pokerbot</p>
            </div>
          </div>
          <div className="flex-1 flex-down gap-4">
            <img src={cat2} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Andreas Nygaard Schiøtt
              </p>
              <p>Role at Pokerbot</p>
            </div>
          </div>
          <div className="flex-1 flex-down gap-4">
            <img src={cat3} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                August Bugge
              </p>
              <p>Role at Pokerbot</p>
            </div>
          </div>
          <div className="flex-1 flex-down gap-4">
            <img src={cat4} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Laura Benthin Hansen
              </p>
              <p>Role at Pokerbot</p>
            </div>
          </div>
          <div className="flex-1 flex-down gap-4">
            <img src={cat5} className="rounded-2xl" />
            <div className="flex-down">
              <p className="font-display-alternative text-2xl m-0">
                Tobias Mondrup Holm
              </p>
              <p>Role at Pokerbot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
