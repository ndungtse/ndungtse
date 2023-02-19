import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Home from "../sections/Home";
import { FaArrowUp } from "react-icons/fa";
import { useApp } from "../contexts/AppContext";
import Layout from "../components/Layout";
const RecentActivity = dynamic(()=> import("../components/home/RecentActivity"));
import { sanityClient } from "../lib/sanity.server";
import { indexQuery } from "../lib/queries";
import Footer from "../sections/Footer";
import Contact from "../sections/Contact";
import Fields from "../sections/Fields";
import Skills from "../sections/Skills";
import { BiMoon, BiSun } from "react-icons/bi";

function App({ recent }: any) {
	const [showArr, setShowArr] = useState(false);
	const { themeClass, isDark, setIsDark } = useApp();
	const [linear, setLinear] = useState(false);

	const cardClass = isDark ? 'cardb' : 'carde'
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
		<>
			<Layout setLinear={setLinear}>
				<Home />
				<div className={`bg-white z-10 ${cardClass} neuro`}>
					<Fields />
					<Skills />
					{showArr && (
						<FaArrowUp
							onClick={goToTop}
							className='fixed bottom-7 cursor-pointer hover:bg-blue-800
        				right-7 text-white  bg-blue-900 p-3 text-[2.5em]'
						/>
					)}
					<RecentActivity recent={recent} />
					<div className={`flex flex-col ${themeClass.bg}`}>
						<Contact />
					</div>
					<Footer />
				</div>
			</Layout>
			<button 
				onClick={()=>setIsDark(!isDark)}
			className={`fixed z-50 cursor-pointer ${cardClass} ${themeClass.bg} ${themeClass.text} p-2 rounded-full left-11 bottom-11 text-2xl`}>
				{isDark ?(
					<BiSun />
				):(
					<BiMoon />
				)}
			</button>
		</>
	);
}

export const getStaticProps = async () => {
	const recent = await sanityClient.fetch(indexQuery);

	return {
		props: { recent },
		revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
	};
};
export default App;
