import { MdOutlineEmail } from "react-icons/md";
import mySelf from "@img/my_self.jpeg"
import { LuDownload } from "react-icons/lu";
import { IoChatboxOutline } from "react-icons/io5";


export const CardAbout = () => {

    const name = "<Victor Sanches/>"

    return (
        <div className="w-full max-w-[460px] max-h-fit bg-card/10 transition-colors duration-500 rounded-xl flex flex-col items-center p-[28px] relative shadow-lg shadow-shadow-primary/10 max-lg:hidden">
            <img className="mb-6 rounded-full w-60" src={mySelf} alt="" />
            <h2 className="text-[var(--text-color-primary)] font-lekton font-bold text-2xl mb-2 transition-colors duration-500">{name}</h2>
            <h3 className="text-[var(--card-text)] font-lekton text-xl mb-3 transition-colors duration-500">Full Stacak Web Devloper</h3>
            <div className="mb-10">
                <ul className="flex">
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
            </div>
            <a href="#" className="bg-[var(--text-color-second)] px-24 py-3 rounded-lg font-bold text-white font-lekton text-2xl flex items-center gap-4 mb-20">
                <MdOutlineEmail />
                Hire me
            </a>
            <div className="flex absolute w-full bottom-0 right-0 text-[var(--text-color-primary)] font-lekton text-xl font-bold">
                <div className="w-full ">
                    <a href="#" className="flex items-center justify-center py-6 gap-4 bg-card/10 rounded-bl-xl inset-ring-1 inset-ring-card/25 transition-colors duration-500">Download CV <LuDownload /></a>
                </div>
                <div className="w-full">
                    <a href="#" className="flex items-center justify-center py-6 gap-4 bg-card/10 rounded-br-xl inset-ring-1 inset-ring-card/25 transition-colors duration-500">Contact me <IoChatboxOutline /></a>
                </div>
            </div>
        </div>
    )
}