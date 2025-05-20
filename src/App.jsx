import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Features from "./components/Features";
import Destinations from "./components/Destinations";
function App() {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Hero />
      <SearchBox />
      <Features/>
      <Destinations/>
    </div>
  );
}

export default App;
