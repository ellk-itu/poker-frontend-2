import AboutUs from "./components/AboutUs";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import PointOfSale from "./components/PointOfSale";

export default function App() {
  return (
    <div className="flex-down gap-8 flex-1">
      <Hero />
      <Cards />
      <PointOfSale />
      <AboutUs />
    </div>
  );
}
