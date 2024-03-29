'use client'
import React from "react";
import Link from "next/link";
import * as Fa from "react-icons/fa";
import { social } from "@/types/main";

const Socials = ({ socials }: { socials?: social[] }) => {

  const getHref = (name: string, link: string) => {
    if (name === "Email") return `mailto:${link}`;
    else if (name === "Phone") return `tel:${link}`;
    else return link;
  };

  return (
    <section
      id="socials"
      className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20"
    >
      {socials?.map((s: social) => {
        return (
          <Link
            href={getHref(s.name, s.link)}
            target="_blank"
            rel="noreferrer"
            title={s.link}
            key={s.name}
            className="grid place-items-center p-2 hover:animate-bounce rounded-full bg-blue-700 text-white"
          >
            {
              //@ts-ignore
              React.createElement(Fa[`Fa${s.icon}`], { size: 20 })
            }
            {/* <Icon /> */}
          </Link>
        );
      })}
    </section>
  );
};

export default Socials;
