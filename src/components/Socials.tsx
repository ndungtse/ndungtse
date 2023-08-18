import React from 'react';
import Link from 'next/link';
import * as Fa from 'react-icons/fa';
import { social } from '@/types/main';

const Socials = () => {

    const socials: social[] = [
        {
            icon: Fa.FaGithub,
            name: 'Github',
            link: 'https://github.com/ndungutecharles103',
        },
        {
            icon: Fa.FaLinkedin,
            name: 'Linkedin',
            link: 'https://www.linkedin.com/in/ndungu-techarles/',
        },
        {
            icon: Fa.FaTwitter,
            name: 'Twitter',
            link: 'https://twitter.com/ndungutecharles',
        },
        {
            icon: Fa.FaInstagram,
            name: 'Instagram',
            link: 'https://www.instagram.com/ndungute_charles/',
        },
        // {
        //     icon: Fa.FaFacebook,
        //     name: 'Facebook',
        //     link: 'https://www.facebook.com/ndungutecharles',
        // },
        // {
        //     icon: 'Youtube',
        //     name: 'Youtube',
        //     link: 'https://www.youtube.com/channel/UCJQJ4YQWzCLP5N2w0oLJj5w',
        // },
    ]

    return (
        <section id='socials' className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
            {socials.map((s: social) => {
                return (
                    <Link href={s.link} target="_blank" rel="noreferrer" key={s.name} className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-blue-700 text-white">
                        {
                            //@ts-ignore
                            React.createElement(s.icon, { size: 20 })
                        }
                        {/* <Icon /> */}
                    </Link>
                )
            })}
        </section>
    )
}

export default Socials