import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import Header from "@/components/header";
import Contact from "@/components/contact";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex flex-col items-center ">
      <Navigation />
      <Header />
      {/*<section className="flex flex-col items-center space-y-4 ">
        <Skills />
        <Contact />
      </section> */}
    </section>
  );
}
// className="max-w-5xl flex flex-col items-center"
