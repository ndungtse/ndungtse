import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
} from "react-icons/fa";
import TypeEffect from "../components/TypefEffect";
import { useApp } from "../contexts/AppContext";
import { socialLinks } from "../contexts/data1";

const Home: React.FC = () => {
	const { themeClass, isDark } = useApp();
	const cardClass = isDark ? 'cardb' : 'carde'

	return (
		<div
			id="home"
			className={`flex sticky top-[4em] home bg-gradient-to-b ${themeClass.bg} justify-center flex-col items-center w-full h-screen`}
		>
			<div
				className={`px-[3%] flex  flex-col h-full w-full
			 items-center justify-center  bg-opacity-100`}
			>
				<div className="flex mx-auto items-center justify-center h-full w-full flex-col z-[5]">
					<div className="relative ml-4 w-full flex flex-col  items-center">
						<h2
							className="laptop:text-[3em] xs:text-[2.5em] text-2xl text-center font-bold leading-[1em] font-poppin
						 bg-gradient-to-tr from-blue-500 to-violet-700 names"
						>
							Hi. I'm Ishimwe Ndungutse Charles
						</h2>
						<TypeEffect />
					</div>
					<div
						className="w-full
					   flex items-start flex-wrap gap-6 justify-center mt-2 text-blue-600"
					>
						{socialLinks.map(link => <a
							key={link.id}
							className={`flex items-center text-xl ${cardClass} ${themeClass.text} rounded-full text-blue-800`}
							href={link.link}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className="flex items-center bg-blu-800 rounded-full
          				 justify-center p-2"
							>
								{link.icon}
							</div>
						</a>)}
					</div>
				</div>
				<div className="flex absolute top-0 px-[5%] laptop:px-0 laptop:aspect-square items-center justify-center">
					{/* <img className="xtab:w-full w-4/5 bg-transparent opacity-60" src={"/images/code.svg"} alt="" /> */}
				</div>
			</div>
		</div>
	);
};

export default Home;
