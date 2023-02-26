"use client";

import { useEffect, useState } from "react";
import { AppProvider, useApp } from "./AppProvider";
import { FaArrowUp } from "react-icons/fa";
import { BiMoon, BiSun } from "react-icons/bi";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [linear, setLinear] = useState(false);
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Shared children={children} />
        </AppProvider>
      </body>
    </html>
  );
}

const Shared = ({ children }: { children: React.ReactNode }) => {
  const [showArr, setShowArr] = useState(false);
  const { themeClass, isDark, setIsDark } = useApp();

  const cardClass = isDark ? "cardb" : "carde";
  const goToTop = () => {
    window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = (e) => {
        if (window.innerHeight / 3 < window.scrollY) {
          setShowArr(true);
        } else {
          setShowArr(false);
        }
      };
    }
  }, []);
  return (
    <div
      className={`w-full flex flex-col min-h-screen justify-between ${themeClass.text}`}
    >
      <Navbar />
      {showArr && (
        <FaArrowUp
          onClick={goToTop}
          className="fixed bottom-7 cursor-pointer hover:bg-blue-800
        				right-7 text-white  bg-blue-900 p-3 text-[2.5em]"
        />
      )}
      {children}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed z-50 cursor-pointer ${cardClass} ${themeClass.bg} ${themeClass.text} p-2 rounded-full left-11 bottom-11 text-2xl`}
      >
        {isDark ? <BiSun /> : <BiMoon />}
      </button>
    </div>
  );
};
