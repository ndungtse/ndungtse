import { social } from "@/types/main";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as Fa from "react-icons/fa";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">
      <div className={`w-full flex items-center justify-center`}>
        <p className="text-center text-md">
          &copy; 2022 Ndungutse Charles - All rights reserved
        </p>
      </div>
    </footer>
  );
}
