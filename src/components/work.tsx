import React, { useEffect, useState } from "react";
import { urlForImage } from "../lib/sanity";
import { useInView } from "react-intersection-observer";
import Image, { ImageLoaderProps } from "next/image";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectType } from "../lib/types";
import { useApp } from "../app/AppProvider";
import { Slide } from "react-awesome-reveal";

type Props = {
  work: ProjectType;
  no: number;
};

const Work = ({ work }: Props) => {
  const { isDark } = useApp();
  const cardClass = isDark ? "cardb" : "carde";
  return (
    <Slide triggerOnce direction="up">
      <div
        className={` flex ${cardClass} flex-col shadow-md items-center p-[4%] justify-between gap-x-8  w-full mx-auto h-full`}
      >
        <div className=" overflow-hidden">
          <Image
            // loader={myLoader}
            src={urlForImage(work.mainImage).url() || ""}
            alt=""
            height={1080}
            width={1920}
            className=""
          />
        </div>
        <div className="flex items-center mt-2 flex-col">
          <h2 className=" text-xl font-bold">{work.title}</h2>
          <p className="">{work.description}</p>
        </div>
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
    </Slide>
  );
};

export default Work;
