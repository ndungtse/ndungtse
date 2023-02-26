"use client";
import { useContext, useState, useEffect, createContext } from "react";

type appContextType = {
  isDark: boolean | string;
  setIsDark: (isDark: boolean) => void;
  themeClass: any;
  mobile: boolean;
  setMobile: (isDark: boolean) => void;
};

const appContextDefaultValues: appContextType = {
  isDark: false,
  setIsDark: () => {},
  themeClass: {},
  mobile: false,
  setMobile: () => {},
};

const themes = {
  light: {
    text: "text-black",
    bg: "from-slate-200 via-slate-200 to-white",
    bg1: "from-white via-white to-slate-100",
    textAlt: "text-white",
    nav: "bg-slate-200 text-black",
    bgAlt: "bg-slate-200",
    bgAlt1: "bg-gradient-to-b from-slate-200 to-white",
  },
  dark: {
    text: "text-white",
    bg: "bg-[#191a2e]",
    bg1: "bg-[#191a2e]",
    textAlt: "text-white",
    nav: "bg-[#191a2e]",
    bgAlt: "bg-[#191a2e]",
    bgAlt1: "bg-[#191a2e]",
  },
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean | string>(false);
  const [mobile, setMobile] = useState(false);
  const [themeClass, setThemeClass] = useState(themes.light);

  const saveTheme = () => {
    const sysTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setThemeClass(isDark ? themes.dark : themes.light);
    if (isDark === "system") {
      setThemeClass(sysTheme ? themes.dark : themes.light);
    }
    if (isDark) {
      localStorage.setItem("theme", "dark");
    } else if (isDark === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  const getSavedTheme = () => {
    const localIsDark = localStorage.getItem("theme");
    const sysTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    console.log(sysTheme);

    console.log(localIsDark);

    if (localIsDark) {
      if (localIsDark === "dark") {
        console.log("darke");
        setIsDark(true);
        setThemeClass(themes.dark);
      } else {
        setIsDark(false);
        setThemeClass(themes.light);
      }
    } else if (sysTheme) {
      setIsDark(true);
      setThemeClass(themes.dark);
    }
  };

  useEffect(() => {
    getSavedTheme();
  }, []);

  useEffect(() => {
    if (isDark !== "") {
      saveTheme();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDark]);

  return (
    <AppContext.Provider
      value={{ isDark, setIsDark, themeClass, mobile, setMobile }}
    >
      {children}
    </AppContext.Provider>
  );
};
