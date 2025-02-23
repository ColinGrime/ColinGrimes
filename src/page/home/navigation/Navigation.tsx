import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WordCycleAnimation } from "./WordCycleAnimation";

export default function Navigation() {
    return (
        <nav className="flex h-full w-75 origin-left flex-col gap-5 bg-gray-900 p-10 text-white">
            <div className="overflow-hidden rounded-xl shadow-md drop-shadow-2xl">
                <img src="colin.jpg" className="-mt-11 -mb-1 brightness-90" />
            </div>

            <div className="flex flex-col items-center self-center whitespace-nowrap">
                <Link to="/" className="text-[38px] font-bold">
                    Colin Grimes
                </Link>
                <div className="flex text-lg">
                    <div>Software&nbsp;</div>
                    <div className="min-w-22">
                        <WordCycleAnimation />
                    </div>
                </div>
            </div>

            <div className="mt-5 flex flex-col font-semibold">
                {["home", "projects", "contact"].map((item) => (
                    <Link key={item} to={`/${item}`} className="transition hover:text-red-400">
                        /{item}
                    </Link>
                ))}
            </div>

            <div className="mt-auto flex justify-center gap-15 text-4xl">
                <FaLinkedin />
                <FaGithub />
            </div>
        </nav>
    );
}
