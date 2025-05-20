import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Features from "./components/Features";
import Destinations from "./components/Destinations";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-blue-50">
      <Hero />
      <SearchBox />
      <Features />
      <Destinations />
      <Newsletter />
      <Testimonials />
      <AppPromo />
      <Footer />
    </div>
  );
}

export default App;
