import Hero from "./components/Hero";
import SearchBox from "./components/SearchBox";
import Features from "./components/Features";
import Destinations from "./components/Destinations";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import AppPromo from "./components/AppPromo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-blue-50">
      <Header/>
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
