import { useState } from "react";
import { BackgroundAnimation } from "./animation/BackgroundAnimation";
import IntroAnimation from "./animation/IntroAnimation";
import Navigation from "./Navigation";
import { AnimationStage, isPageReady } from "./util/animation";

export function Home() {
    const [stage, setStage] = useState<AnimationStage>(AnimationStage.Init);

    return (
        <div className="flex h-full w-full">
            {stage !== AnimationStage.Completed && <IntroAnimation stage={stage} setStage={setStage} />}
            <div className={`absolute left-28 hidden h-full w-full transition-opacity duration-2000 xl:block ${!isPageReady(stage) && "opacity-0"}`}>
                <BackgroundAnimation stage={stage} />
            </div>
            {isPageReady(stage) && (
                <div>
                    <Navigation />
                    <div className="relative top-15 left-90 flex w-125 flex-col gap-10 self-start">
                        <section className="flex flex-col gap-5">
                            <h1 className="text-3xl font-bold">Welcome!</h1>
                            <p>
                                I'm Colin.
                                <br />
                                I'm a software developer.
                            </p>
                            <p>I have experience with a number of languages and libraries:</p>
                            <div className="grid h-50 w-110 grid-cols-6 grid-rows-3 gap-x-5">
                                <img src="programming/java.svg" />
                                <img src="programming/python.svg" />
                                <img src="programming/typescript.svg" />
                                <img src="programming/javascript.svg" />
                                <img src="programming/selenium.svg" />
                                <img src="programming/node.svg" />
                                <img src="programming/react.svg" />
                                <img src="programming/tailwindcss.svg" />
                                <img src="programming/material-ui.svg" />
                                <img src="programming/jest.svg" />
                                <img src="programming/openlayers.svg" />
                                <img src="programming/electron.svg" />
                                <img src="programming/gradle.svg" />
                                <img src="programming/maven.svg" />
                                <img src="programming/sql.svg" />
                                <img src="programming/postgresql.svg" />
                                <img src="programming/docker.svg" />
                                <img src="programming/git.svg" />
                            </div>
                            <p>
                                I'm passionate about clean code, scalable architecture, and efficient design patterns, and I enjoy exploring new technologies to
                                expand my skill set.
                            </p>
                        </section>
                        <section className="flex flex-col gap-5">
                            <h2 className="text-2xl font-bold">Projects</h2>
                            <ul className="list-disc pl-5">
                                <li>
                                    <a href="https://github.com/ColinGrime/Midnight" target="_blank" className="font-semibold">
                                        Midnight
                                    </a>
                                    : Bukkit plugin development library, designed for ease of use and streamlined plugin creation.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/SkyMines" target="_blank" className="font-semibold">
                                        SkyMines
                                    </a>
                                    : Java Minecraft plugin that utilizes numerous OOP concepts, design principles, and database integrations.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/Chess" target="_blank" className="font-semibold">
                                        Chess
                                    </a>
                                    : Java Swing application that accounts for most rulings and displays all possible moves on the grid.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/Pixeldex" target="_blank" className="font-semibold">
                                        Pixeldex
                                    </a>
                                    : Electron.js desktop application that lists all Pokémon statistics in a user-friendly manner.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/ApexTournaments" target="_blank" className="font-semibold">
                                        ApexTournaments
                                    </a>
                                    : Discord.js bot that tracks your in-game statistics and allows you to host tournaments.
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}
