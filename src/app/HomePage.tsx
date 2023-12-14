"use client";
import { data } from "@/types/main";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/Hero"));
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/skills/Skills"));
const Projects = dynamic(() => import("@/components/projects/Projects"));
const Socials = dynamic(() => import("@/components/Socials"));
const Experiences = dynamic(() => import("@/components/experiences/Experiences"));
const Contact = dynamic(() => import("@/components/Contact"));
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));


interface Props {
  data: data;
}

const HomePage = ({ data }: Props) => {
  return (
    <>
      <Header />
      <Hero mainData={data?.main} />
      <Socials socials={data?.socials} />
      <About aboutData={data?.about} />
      <Skills skillData={data?.skills} />
      <Projects projectsData={data?.projects ?? []} />
      <Experiences
        experienceData={data?.experiences}
        educationData={data?.educations}
      />
      <Contact />
      <Footer socials={data?.socials} />
    </>
  );
};

export default HomePage;
