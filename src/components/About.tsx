import Image from "next/image"
import { about } from "@/types/main";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import { BiLinkExternal } from "react-icons/bi";


const About = () => {
    const aboutData: about = {
        aboutImage: '/avatar.png',
        aboutImageCaption: 'Charles Ndungutse',
        title: 'I\'m Charles Ndungutse',
        about: 'I\'m a full-stack web developer with a passion for building beautiful, functional, and scalable web applications. I\'m currently a student at the University of Nairobi pursuing a Bachelor\'s degree in Computer Science. I\'m also a self-taught developer with a keen interest in learning new technologies and frameworks. I\'m currently learning React and Next.js and I\'m looking forward to learning more about them and other technologies.',
        resumeUrl: 'https://drive.google.com/file/d/1ZyB6zY4g1lHJw9dY7zJ2c6y5oZ5bUZ7b/view?usp=sharing',
        callUrl: 'https://calendly.com/ndungutecharles103/30min',
    }

    const { aboutImage, aboutImageCaption, title, about, resumeUrl, callUrl } = aboutData

    return (
        <SectionWrapper id="about" className="min-h-[90vh] pt-12 bg-gradient-to-b from-white to-gray-100/20 dark:from-grey-900 dark:to-grey-900">
            <h2 className="text-4xl text-center">About Me</h2>

            <div className="w-full lg:w-11/12 2xl:w-4/5 mt-2 lg:mt-20 mx-auto flex flex-col md:gap-4 lg:flex-row justify-between items-center">
                <div className="p-3 w-56 self-start md:w-2/5 lg:w-72 bg-white dark:bg-grey-800 flex flex-col gap-2 items-center rounded-2xl mx-auto lg:mx-16 hover:-translate-y-2 transition-transform duration-300 lg:-rotate-3">
                    <Image alt="profile" width={1000} height={1000} loading={'lazy'} className="w-full h-60 md:h-80 rounded-2xl object-cover grayscale hover:grayscale-0 transition-all bg-blue-100" src={aboutImage} />
                    <span className="font-medium font-sans">{aboutImageCaption || '< I Build Stuff 🚀 />'}</span>
                </div>

                <div className="flex-1 text-left mx-4 mt-4 md:mt-0 md:mx-0 md:p-6">
                    <div className="flex flex-col gap-2.5">
                        <p className="text-3xl font-semibold">{'Ishimwe Ndungutse Charles'}</p>
                        <p className='text-blue-800 w-fit rounded py-1 px-2 text-sm dark:text-blue-600 bg-blue-50 dark:bg-blue-900/10'>{title}</p>
                        <p className="text-sm md:text-base my-2 text-gray-600 dark:text-gray-300">{about}</p>
                        <div className="flex items-center gap-4 md:mt-4">
                            {resumeUrl.trim() && <Link href={resumeUrl} target="_blank" className="text-sm md:text-base bg-blue-600 dark:bg-blue-700 text-white w-fit rounded-md py-2 px-6 hover:shadow-xl transition-shadow">Resume</Link>}
                            {callUrl.trim() && <Link href={callUrl} target="_blank" className="text-blue-600 flex items-center gap-1 hover:bg-blue-50 hover:dark:bg-blue-900/10 py-2 px-4 transition-colors rounded-md">Book a 1:1 call <BiLinkExternal /> </Link>}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default About