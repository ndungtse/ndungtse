import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import { BiMenu, BiSun } from "react-icons/bi";
import { useApp } from "../contexts/AppContext";
import { sanityClient } from "../lib/sanity.server";

type Props = {
	setLinear: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<Props> = ({ setLinear }) => {
	const { isDark, setIsDark, themeClass, mobile, setMobile } = useApp();
	const router = useRouter();
	const [resumeUrl, setResumeUrl] = useState("");
	const mobileHan: any = () => {
		setMobile(false);
	};

	const handleNavClick = (path: string) => {
		setMobile(!mobile);
		if (path !== router.pathname) {
			setLinear(true);
			router.push(path);
		}
	};

	if (typeof window === "object") {
		console.log(typeof window);
		window.addEventListener("resize", () => {
			if (window.innerWidth > 750) {
				setMobile(false);
			}
		});
	}

	const getResume = async () => {
		setLinear(true);
		let url = resumeUrl;
		if (url === "") {
			const res = await sanityClient.fetch(
				`*[_type == "resources" && title=="Resume"]{
				file{asset->{url}}
			}`
			);
			setResumeUrl(res[0].file.asset.url);
			url = res[0].file.asset.url;
		}
		setLinear(false);
		window.open(url, "_blank");
	};

	// useMemo(() => {
	// 	getResume();
	// }, []);

	return (
		<div
			className={`h-[64px] z-10 ${themeClass.nav} sticky top-0 bg-gradient-to-t shadow-md z-50 justify-center`}
		>
			<BiMenu
				onClick={() => setMobile(!mobile)}
				className='md:hidden z-10 block text-3xl cursor-pointer absolute right-3 top-3'
			/>
			<div
				className={`w-full md:static absolute z-[5] flex md:flex-row flex-col items-center bg-inherit
			${
				mobile ? "top-0" : "-top-[1000px]"
			} duration-500 md:py-0 py-4 md:h-full px-[4%] justify-between`}
			>
				<div
					onClick={mobile ? mobileHan : () => {}}
					className='md:static top-[0.15em] fixed left-7 flex items-center'
				>
					<img
						className='aspect-square w-[60px]'
						src={"/images/logo.png"}
						alt='charles'
					/>
				</div>
				<div
					className={`z-50 font-[500] flex flex-col duration-300 
                md:flex-row items-center text-xl md:justify-end md:py-0 py-4`}
				>
					<p
						onClick={() => handleNavClick("#")}
						className='md:ml-4 p-2 hover:text-[#0667ef] cursor-pointer navlink relative'
					>
						Home
					</p>
					<p
						onClick={() => handleNavClick("#fields")}
						className='md:ml-4 p-2 hover:text-[#0667ef] cursor-pointer navlink relative'
					>
						Carreer
					</p>
					<p
						onClick={() => handleNavClick("#projects")}
						className='md:ml-4 p-2 hover:text-[#0667ef] cursor-pointer navlink relative'
					>
						Projects
					</p>
					<p
						onClick={() => handleNavClick("#contact")}
						className='md:ml-4 p-2 hover:text-[#0667ef] cursor-pointer navlink relative'
					>
						Contact
					</p>
					{/* <BiSun className='ml-3 cursor-pointer'
                onClick={()=> setIsDark(!isDark)} /> */}
				</div>
				<button
					onClick={getResume}
					className='md:mt-0 mt-2 min-w-fit overflow-hidden btnstarted relative border-blue-500 border-2 text-blue-500  truncate py-1 px-4 ml-5 rounded-md hover:text-white'
				>
					<span className=' relative z-[2]'>Download CV </span>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
