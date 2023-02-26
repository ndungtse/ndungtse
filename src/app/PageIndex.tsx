"use client";

import RecentActivity from "@/components/home/RecentActivity";
import React from "react";
import Contact from "../sections/Contact";
import Fields from "../sections/Fields";
import Footer from "../sections/Footer";
import Home from "../sections/Home";
import Skills from "../sections/Skills";
import { useApp } from "./AppProvider";

const PageIndex = ({ recent }: { recent: any[] }) => {
  const { themeClass, isDark, setIsDark } = useApp();
  const cardClass = isDark ? "cardb" : "carde";
  return (
    <>
      <Home />
      <div className={`bg-white z-10 ${cardClass} neuro`}>
        <Fields />
        <Skills />
        <RecentActivity recent={recent} />
        <div className={`flex flex-col ${themeClass.bg}`}>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageIndex;
