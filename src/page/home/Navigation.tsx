import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Resource } from "../../config/settings";
import { WordCycleAnimation } from "./animation/WordCycleAnimation";
import { TicTacToe } from "./game/TicTacToe";

type Props = {
    resource?: Resource;
};

export default function Navigation({ resource }: Props) {
    return (
        <nav className="flex w-screen origin-left flex-col bg-slate-950 text-white md:fixed md:h-full md:w-75">
            <div className="mx-10 mt-10 h-full w-60 self-center shadow-md drop-shadow-2xl md:h-62 md:w-55">
                <img src="colin.jpg" draggable="false" className="rounded-xl brightness-90" />
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

            <div className={`mt-5 flex flex-col ${resource ? "block" : "hidden"}`}>
                <svg viewBox="0 -3 200 17">
                    <polyline points="0,12 100,0 200,12" className="fill-none stroke-cyan-950 stroke-3" />
                </svg>
                {resource?.year && resource.description && (
                    <section className="mx-6 mb-3 flex flex-col gap-3">
                        <div className="mx-auto flex text-xl">
                            <div className="font-bold">{resource.name}&nbsp;</div>
                            <div>({new Date().getFullYear() - resource.year}+ years)</div>
                        </div>
                        <p>{resource.description}</p>
                    </section>
                )}
                <div className={`mx-auto h-55 w-55 ${resource?.name === "Tic Tac Toe" ? "block" : "hidden"}`}>
                    <TicTacToe />
                </div>
                <svg viewBox="0 -3 200 17">
                    <polyline points="0,0 100,12 200,0" className="fill-none stroke-cyan-950 stroke-3" />
                </svg>
            </div>

            <nav className="mt-auto mb-7 flex justify-center gap-15 pt-4 text-4xl md:pt-0">
                <motion.a
                    href="https://www.linkedin.com/in/colingrimes"
                    target="_blank"
                    draggable="false"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a href="https://github.com/ColinGrime" target="_blank" draggable="false" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
                    <FaGithub />
                </motion.a>
            </nav>
        </nav>
    );
}
