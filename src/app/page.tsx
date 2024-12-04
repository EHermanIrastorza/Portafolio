import AboutMe from "@/components/Aboutme";
import Contact from "@/components/contact";
import { Header } from "@/components/header";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
