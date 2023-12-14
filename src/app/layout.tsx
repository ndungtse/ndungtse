import { Poppins } from "@next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio | Ndungutse Charles - Full Stack Developer",
  description:
    "I'm Ndungutse Charles, full-stack developer based in Kigali, Rwanda. My journey in web development began during my first year of upper-high school.",
  openGraph: {
    title: "Portfolio | Ndungutse Charles - Full Stack Developer",
    description:
      "I'm Ndungutse Charles, full-stack developer based in Kigali, Rwanda. My journey in web development began during my first year of upper-high school.",
    url: "https://ndungutsecharles.me",
    type: "profile",
    images: [
      {
        url: "/avatar.png",
        width: 460,
        height: 460,
        alt: "Ndungutse Charles",
      },
    ],
    countryName: "Rwanda",
    siteName: "Portfolio | Ndungutse Charles - Full Stack Developer",
    firstName: "Ndungutse",
    lastName: "Charles Ishimwe",
    gender: "male",
    username: "ndungutsecharles",
  },
  authors: [
    {
      url: "https://ndungutsecharles.me",
      name: "Ishimwe Ndungutse Charles",
    },
  ],
  twitter: {
    card: "summary",
    site: "@ndungutsecharl1",
    description:
      "I'm Ndungutse Charles, full-stack developer based in Kigali, Rwanda. My journey in web development began during my first year of upper-high school.",
    title: "Portfolio | Ndungutse Charles - Full Stack Developer",
    images: [
      {
        url: "/avatar.png",
        width: 460,
        height: 460,
        alt: "Ndungutse Charles",
      },
    ],
  },
  applicationName: "Portfolio | Ndungutse Charles - Full Stack Developer",
  appleWebApp: {
    capable: true,
    title: "Portfolio | Ndungutse Charles - Full Stack Developer",
    startupImage: {
      url: "/avatar.png",
    },
  },
  keywords: [
    "Ndungutse Charles",
    "Frontend Developer",
    "full stack dev",
    "Rwandan developers",
    "Rwanda Coding Academy",
    "Software Engineer",
    "personal portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <Providers poppins={poppins}>{children}</Providers>
    </html>
  );
}
