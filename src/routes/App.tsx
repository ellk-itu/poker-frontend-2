import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="flex flex-col gap-8 flex-1">
      <Hero />
      <div className="flex gap-8 p-16 h-fit">
        <div className="bg-base-200 flex-1 h-24 py-8 px-16 rounded-2xl flex-1">
          <p className="font-text font-bold text-4xl m-0">
            Show Off Your Algorithmic Prowess
          </p>
          <p>
            Test your skills against other ITU students by creating a
            poker-playing algorithm, and use it to battle it on our homemade
            server.
          </p>
          <p>
            Languages include ones you&#0027;ve (probably) already encountered.
            We offer documentation in both Python and Java for the lowest
            barrier to entry
          </p>
        </div>
        <div className="bg-base-200 flex-1 h-24"></div>
        <div className="bg-primary flex-1 h-24"></div>
      </div>
    </div>
  );
}
