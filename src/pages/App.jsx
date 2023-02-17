import AboutUs from "../components/AboutUs";
import Banner from "../components/Banner";
import ClientsAndSponsor from "../components/ClientsAndSponsor";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Contact from "../components/header/Contact";
import Navbar from "../components/header/Navbar";
import News from "../components/News";
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

      {/* Sections */}
      <Banner />
      <Specialities />
      <AboutUs />
      <Services />
      <ClientsAndSponsor />
      <TeamAdvisor />
      <ContactUs />
      <News />
      {/* Sections */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </div>
  );
}

export default App;
