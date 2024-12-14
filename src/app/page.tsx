import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Certifications from "@/components/CertificationsCard";
import image1 from "@/images/ServiceNowCSA.png";
import image2 from "@/images/ServiceNowCAD.png";
import image3 from "@/images/ServiceNowCISITSM.png";

const slides = [
  image1,
  image2,
  image3
]

export default function Page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Certifications slides={slides} />
      <br/><br/><br/><br/><br/>
      <Experience/>
      {/* <Projects/> */}
      <ContactMe/>
    </div>
  );
}
