import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Resource } from "../../config/settings";
import { WordCycleAnimation } from "./animation/WordCycleAnimation";

type Props = {
    resource?: Resource;
};

export default function Navigation({ resource }: Props) {
    return (
        <nav className="fixed flex h-full w-75 origin-left flex-col bg-slate-950 text-white">
            <div className="mx-10 mt-10 shadow-md drop-shadow-2xl">
                <img src="colin.jpg" className="rounded-xl brightness-90" />
            </div>

            <div className="mt-5 flex flex-col items-center self-center whitespace-nowrap">
                <h1 className="text-[38px] font-bold">Colin Grimes</h1>
                <div className="flex text-lg">
                    <div>Software&nbsp;</div>
                    <div className="min-w-22">
                        <WordCycleAnimation />
                    </div>
                </div>
            </div>

            {resource && (
                <div className="mt-5 flex flex-col">
                    <svg viewBox="0 -3 200 17">
                        <polyline points="0,12 100,0 200,12" className="fill-none stroke-cyan-950 stroke-3" />
                    </svg>
                    <section className="mx-8 mb-3 flex flex-col gap-3">
                        <div className="mx-auto flex text-xl">
                            <div className="font-bold">{resource.name}&nbsp;</div>
                            <div>({new Date().getFullYear() - resource.year}+ years)</div>
                        </div>
                        <p>{resource.description}</p>
                    </section>
                    <svg viewBox="0 -3 200 17">
                        <polyline points="0,0 100,12 200,0" className="fill-none stroke-cyan-950 stroke-3" />
                    </svg>
                </div>
            )}

            <nav className="mt-auto mb-7 flex justify-center gap-15 text-4xl">
                <a href="https://www.linkedin.com/in/colingrimes" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/ColinGrime" target="_blank">
                    <FaGithub />
                </a>
            </nav>
        </nav>
    );
}
