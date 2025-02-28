import { FormEvent, useState } from "react";
import { IoIosSend } from "react-icons/io";
import { Resource, resources } from "../../config/settings";
import { BackgroundAnimation } from "./animation/BackgroundAnimation";
import IntroAnimation from "./animation/IntroAnimation";
import Navigation from "./Navigation";
import { AnimationStage, isPageReady } from "./util/animation";

export function Home() {
    const [stage, setStage] = useState<AnimationStage>(AnimationStage.Init);
    const [resource, setResource] = useState<Resource | undefined>();
    const [defaultResource, setDefaultResource] = useState<Resource | undefined>();

    const handleContact = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const name = data.get("name") as string;
        const email = data.get("email") as string;
        const subject = data.get("subject") as string;
        const message = data.get("message") as string;

        if (!name || !email || !subject || !message) {
            alert("All fields are required!");
            return;
        }

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, subject, message }),
        };
        fetch("/contact", requestOptions)
            .then((res) => res.json())
            .then((data) => alert("Message sent successfully!"))
            .catch((err) => alert("Something went wrong!"));
    };

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
                    <Navigation resource={resource || defaultResource} />
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
                                {resources.map((resource) => (
                                    <button
                                        key={resource.name}
                                        onClick={() => setDefaultResource(resource)}
                                        onMouseEnter={() => setResource(resource)}
                                        onMouseLeave={() => setResource(undefined)}
                                        className="-m-2 p-2 hover:cursor-pointer"
                                    >
                                        <img src={resource.path} />
                                    </button>
                                ))}
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
                        <section className="flex flex-col gap-5">
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
                        <section className="flex flex-col gap-2 pb-10">
                            <h2 className="text-2xl font-bold">Contact Me! :)</h2>
                            <form onSubmit={(e) => handleContact(e)} noValidate className="flex w-full flex-col gap-1">
                                <div className="flex gap-1">
                                    <input id="name" name="name" placeholder="Name" required className="w-full rounded bg-gray-200 p-2" />
                                    <input id="email" name="email" placeholder="Email" type="email" required className="w-full rounded bg-gray-200 p-2" />
                                </div>
                                <input id="subject" name="subject" placeholder="Subject" required className="w-full rounded bg-gray-200 p-2" />
                                <textarea id="message" name="message" placeholder="Message" required className="h-50 resize-none rounded bg-gray-200 p-2" />
                                <button
                                    type="submit"
                                    className="flex h-10 w-45 items-center justify-center rounded bg-slate-950 p-1 text-lg font-semibold text-white hover:cursor-pointer"
                                >
                                    Send Message <IoIosSend className="pl-1 text-3xl" />
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}
