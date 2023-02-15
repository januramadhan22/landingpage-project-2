import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import Contact from "../components/header/Contact";
import Navbar from "../components/header/Navbar";
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
    </div>
  );
}

export default App;
