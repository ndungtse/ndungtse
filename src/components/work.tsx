import { AnimationControls, useAnimation, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { urlForImage } from "../lib/sanity";
import { useInView } from "react-intersection-observer";
import Image, { ImageLoaderProps } from "next/image";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectType } from "../lib/types";

const myLoader = ({ src }: ImageLoaderProps) => {
	return `${src}`;
};

const textVariant = {
	before: { opacity: 0, x: -40, transition: { duration: 10 } },
	after: { opacity: 1, x: 0 },
};

const imgVariant = {
	before: { opacity: 0, x: 40, transition: { duration: 10 } },
	after: { opacity: 1, x: 0 },
};

type Props = {
	work: ProjectType;
	no: number;
}

const Work = ({ no, work }: Props) => {
	const control: AnimationControls = useAnimation();
	const [proref, inView] = useInView();
	const [imgVar, setImgVar] = useState<any>(imgVariant);
	const [textVar, setTextVar] = useState<any>(textVariant);

	useEffect(() => {
		if (inView) {
			control.start("after");
			console.log("pro");
		}
	}, [control, inView]);

	return (
		<div
			className={` flex flex-col border-[1px]
      border-slate-200 shadow-md items-center p-[4%] justify-between gap-x-8  mt-[3vh] w-[80%] mx-auto`}
		>
			<motion.div
				ref={proref}
				variants={no % 2 === 0 ? imgVar : textVar}
				animate={control}
				initial="before"
				className=" overflow-hidden"
			>
				<Image
					// loader={myLoader}
					src={urlForImage(work.mainImage).url() || ""}
					alt=""
					height={1080}
					width={1920}
					className=""
				/>
			</motion.div>
			<motion.div
				ref={proref}
				variants={no % 2 === 0 ? textVar : imgVar}
				animate={control}
				initial="before"
				className="flex items-center mt-2 flex-col"
			>
				<h2 className=" text-xl font-bold">{work.title}</h2>
				<p className="">{work.description}</p>
			</motion.div>
			<div className="flex items-center w-full justify-between">
				<a
					href={work.link}
					target="_blank"
					rel="noreferrer"
					className="flex mx-auto  items-center phone:w-[100px] w-1/3 mt-4 text-white px-3 py-2 rounded-md bg-blue-800
         justify-center hover:bg-blue-700 duration-300 cursor-pointer"
				>
					<FaExternalLinkAlt size={20} />
				</a>
				<a
					href={work.github}
					target="_blank"
					rel="noreferrer"
					className="flex mx-auto  items-center phone:w-[100px] w-1/3 mt-4 text-white px-3 py-1 rounded-md bg-blue-800
         justify-center hover:bg-blue-700 duration-300 cursor-pointer"
				>
					<FaCode size={27} />
				</a>
			</div>
		</div>
	);
};

export default Work;
