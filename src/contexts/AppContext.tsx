import { useContext, useState, useEffect, createContext } from "react";

type appContextType = {
	isDark: boolean;
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
		nav: "bg-slate-50 text-black",
		bgAlt: "bg-slate-200",
		bgAlt1: "bg-gradient-to-b from-slate-200 to-white",
	},
	dark: {
		text: "text-white",
		bg: "from-slate-800 via-slate-800 to-slate-800",
		bg1: "from-slate-800 via-slate-800 to-slate-800",
		textAlt: "text-white",
		nav: "bg-[#191a2e]",
		bgAlt: "bg-[#191a2e]",
		bgAlt1: "from-[#191a2e]/90 via-[#191a2e] to-[#191a2e]",
	},
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	const [isDark, setIsDark] = useState(false);
	const [mobile, setMobile] = useState(false);
	const [themeClass, setThemeClass] = useState(themes.dark);

	const saveTheme = () => {
		if (isDark) {
			localStorage.setItem("theme", "dark");
		} else {
			localStorage.setItem("theme", "light");
		}
	};

	const getSavedTheme = () => {
		const localIsDark = localStorage.getItem("isDark");
		if (localIsDark) {
			if (localIsDark === "dark") {
				setIsDark(true);
				setThemeClass(themes.dark);
			} else {
				setIsDark(false);
				setThemeClass(themes.light);
			}
		}
	};

	// useEffect(() => {
	// 	if (isDark) {
	// 		localStorage.setItem("theme", "dark");
	// 	} else {
	// 		localStorage.setItem("theme", "light");
	// 	}

	// 	setThemeClass(isDark ? themes.dark : themes.light);
	// }, [isDark]);

	useEffect(() => {
		// getSavedTheme();
	}, []);

	return (
		<AppContext.Provider
			value={{ isDark, setIsDark, themeClass, mobile, setMobile }}
		>
			{children}
		</AppContext.Provider>
	);
};
