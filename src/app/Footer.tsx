import { social } from "@/types/main";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Fa from "react-icons/fa";

const Footer = ({ socials }: { socials?: social[] }) => {

  const getHref = (name: string, link: string) => {
    if (name === "Email") return `mailto:${link}`;
    else if (name === "Phone") return `tel:${link}`;
    else return link;
  };
  return (
    <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">
      <div className={`w-full gap-x-4 sm:flex-row flex-col flex items-center justify-center`}>
        <p className="text-center text-sm">
          &copy; 2023 Ndungutse Charles - All rights reserved
        </p>
        <div className="flex items-center gap-x-2">
        {socials?.map((s: social) => {
        return (
          <Link
            href={getHref(s.name, s.link)}
            target="_blank"
            rel="noreferrer"
            key={s.name}
            title={s.link}
            className="grid place-items-center p-2 hover:animate-bounce rounded-full text-blue-700 "
          >
            {
              //@ts-ignore
              React.createElement(Fa[`Fa${s.icon}`], { size: 20 })
            }
            {/* <Icon /> */}
          </Link>
        );
      })}
        </div>
      </div>
    </footer>
  );
}

export default Footer
