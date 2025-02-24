import { useState } from "react";
import { BackgroundAnimation } from "./animation/BackgroundAnimation";
import IntroAnimation from "./animation/IntroAnimation";
import Navigation from "./Navigation";
import { AnimationStage, isPageReady } from "./util/animation";

export function Home() {
    const [stage, setStage] = useState<AnimationStage>(AnimationStage.Init);

    return (
        <div className="relative flex h-full w-screen overflow-x-hidden">
            {stage !== AnimationStage.Completed && <IntroAnimation stage={stage} setStage={setStage} />}
            {stage !== AnimationStage.Init && (
                <div
                    className={`pointer-events-none fixed left-28 hidden h-full w-full transition-opacity duration-2000 xl:block ${!isPageReady(stage) && "opacity-0"}`}
                >
                    <BackgroundAnimation stage={stage} />
                </div>
            )}
            {isPageReady(stage) && (
                <div>
                    <Navigation />
                    <div className="relative top-15 left-90 flex w-125 flex-col gap-10 self-start">
                        <section className="flex flex-col gap-5">
                            <button
                                onClick={() => setStage(AnimationStage.Init)}
                                className="self-start text-3xl font-bold hover:cursor-pointer hover:underline"
                            >
                                Hello!
                            </button>
                            <p>
                                I'm Colin, a software developer.
                                <br />I have experience with a number of languages and libraries:
                            </p>
                            <div className="grid h-50 w-110 grid-cols-6 grid-rows-3 gap-x-4">
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
                                <img src="programming/tic-tac-toe.svg" />
                            </div>
                            <p>
                                I'm passionate about clean code, scalable architecture, and efficient design patterns, and I enjoy exploring new technologies to
                                expand my skill set.
                            </p>
                        </section>
                        <section className="flex flex-col gap-5">
                            <h2 className="text-2xl font-bold">Personal Projects</h2>
                            <ul className="link flex list-disc flex-col gap-2 pl-5">
                                <li>
                                    <a href="https://github.com/ColinGrime/Midnight" target="_blank">
                                        Midnight
                                    </a>
                                    : Powerful and extensible Bukkit plugin development library, designed for ease of use and streamlined plugin creation.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/SkyMines" target="_blank">
                                        SkyMines
                                    </a>
                                    : Java Minecraft plugin enabling personalized and customizable mines for individual players, complete with upgrade paths,
                                    adjustable settings, and multiple storage options.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/Chess" target="_blank">
                                        Chess
                                    </a>
                                    : Classic chess game recreated in Java Swing, complete with essential rules and intuitive move guidance for players.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/Pixeldex" target="_blank">
                                        Pixeldex
                                    </a>
                                    : Electron.js desktop application that lists all (currently 905) Pixelmon statistics and spawn information.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/ApexTournaments" target="_blank">
                                        ApexTournaments
                                    </a>
                                    : Discord.js bot that tracks your in-game statistics and allows you to host tournaments.
                                </li>
                                <li>
                                    <a href="https://github.com/ColinGrime/SiriusEnchants" target="_blank">
                                        SiriusEnchants
                                    </a>
                                    : Java Minecraft plugin with 30+ custom enchantments, a purchase/preview menu, admin free-buy, unenchanting, and stacked
                                    enchant levels.
                                </li>
                                <li>
                                    ...and many more! Check out my Github{" "}
                                    <a href="https://github.com/ColinGrime" target="_blank">
                                        @ColinGrime
                                    </a>
                                    .
                                </li>
                            </ul>
                        </section>
                        <section className="flex flex-col gap-5 pb-10">
                            <h2 className="text-2xl font-bold">Work Experience</h2>
                            <ul className="link flex list-disc flex-col gap-2 pl-5">
                                <li>
                                    <b>CounterUAS</b>: Developed a Python microservice for real-time airspace threat detection, integrating surveillance data
                                    processing, predictive tracking, and an alerting system with an OpenLayers-based frontend.
                                </li>
                                <li>
                                    <b>Chat System</b>: Designed and implemented a comprehensive chat system featuring real-time communication via WebSockets,
                                    direct messaging, group chat functionality, and instant notifications using React and PostgreSQL.
                                </li>
                                <li>
                                    <b>Selenium Suite</b>: Built the foundation of a Selenium automation suite, implementing 15+ automated tests, fully
                                    automating critical testing scenarios, and integrating a robust logging system that captures timestamps, test logs, Chrome
                                    logs, code errors, and relevant screenshots.
                                </li>
                                <li>
                                    <b>PostgreSQL Testing</b>: Developed a custom PostgreSQL testing tool in Node.js to streamline database validation by
                                    automating the testing of insert, get, and update functions, ensuring accurate and reliable database operations.
                                </li>
                                <li>
                                    <b>Frontend Development</b>: Built and optimized React.js components using Material UI with a focus on usability and
                                    functionality, while proactively identifying and fixing critical bugs, improving code quality, and ensuring thorough unit
                                    test coverage for maintainability.
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}
