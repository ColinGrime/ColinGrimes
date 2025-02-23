import { FaGithub, FaLinkedin } from "react-icons/fa";
import { WordCycleAnimation } from "./animation/WordCycleAnimation";

export default function Navigation() {
    return (
        <nav className="fixed flex h-full w-75 origin-left flex-col gap-5 bg-slate-950 p-10 text-white">
            <div className="overflow-hidden rounded-xl shadow-md drop-shadow-2xl">
                <img src="colin.jpg" className="-mt-11 -mb-1 brightness-90" />
            </div>

            <div className="flex flex-col items-center self-center whitespace-nowrap">
                <div className="text-[38px] font-bold">Colin Grimes</div>
                <div className="flex text-lg">
                    <div>Software&nbsp;</div>
                    <div className="min-w-22">
                        <WordCycleAnimation />
                    </div>
                </div>
            </div>

            <div className="mt-auto flex justify-center gap-15 text-4xl">
                <a href="https://www.linkedin.com/in/colingrimes" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ColinGrime" target="_blank">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
}
