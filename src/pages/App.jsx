import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import ClientsAndSponsor from "../components/ClientsAndSponsor";
import Contact from "../components/header/Contact";
import Navbar from "../components/header/Navbar";
import Services from "../components/Services";
import Specialities from "../components/Specialities";
import TeamAdvisor from "../components/TeamAdvisor";

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
      <ClientsAndSponsor />
      <TeamAdvisor />
    </div>
  );
}

export default App;
