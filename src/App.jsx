// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      {/* <Testimonials /> */}
      {/* <Hireme /> */}
      {/* <Contact /> */}
      <footer className="p-3 text-center" id="contact">
       <h6 className="mb-3">Mohammed SHAMIL</h6>
        <p>shamilmohd418@gmail.com</p>
        <p>+91 9562 890504</p>
        <p>Mohammed Shamil © All CopyRights Reserved 2024</p>
      </footer>
    </div>
  );
};

export default App;
