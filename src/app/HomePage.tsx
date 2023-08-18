'use client';
import { data } from "@/types/main";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Socials from "@/components/Socials";
import Experiences from "@/components/experiences/Experiences";
import Contact from "@/components/Contact";
import CallToAction from "@/components/CallToAction";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
    data?: data,
}

const HomePage = ({ data }: Props) => {
    return (
        <>
            <Header />
            <Hero  />
            {/* <Hero  /> */}
            <Socials/>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            {/* 
            <Experiences experienceData={data.experiences} educationData={data.educations} />
             */}
        </>
    )
}

export default HomePage