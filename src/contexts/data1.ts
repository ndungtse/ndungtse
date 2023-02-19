import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

export const socialLinks = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ishimwe-ndungutse-charles-079418227",
        icon: React.createElement(FaLinkedin),

    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/NdungutseCharles103",
        icon: React.createElement(FaGithubSquare),
    },
    {
        id: 3,
        name: "Facebook",
        link: "https://www.facebook.com/ishimwendungutsecharles",
        icon: React.createElement(FaFacebookSquare),
    },
    {
        id: 4,
        name: "Instagram",
        link: "https://www.instagram.com/ndungutse_charles",
        icon: React.createElement(FaInstagramSquare),
    },
    {
        id: 5,
        name: "Email",
        link: "mailto:ndungutsecharles103@gmail.com",
        icon: React.createElement(BiEnvelopeOpen),
    }
]