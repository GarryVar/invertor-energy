import Hero from "../components/Hero/Hero";
import Pain from "../components/Pain/Pain";
import Advantages from "../components/Advantages/Advantages";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

import "../index.css";

function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Pain />
      <Advantages />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Home;
