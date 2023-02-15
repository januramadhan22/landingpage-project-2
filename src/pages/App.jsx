import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Contact from "../components/header/Contact";
import Navbar from "../components/header/Navbar";
import Services from "../components/Services";
import Specialities from "../components/Specialities";

function App() {
  return (
    <div className="w-full">
      {/* Header */}
      <Contact />
      <Navbar />
      {/* Header */}

      <Banner />
      <Specialities />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
