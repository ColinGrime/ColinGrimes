import { useState } from "react";
import Hero from "./hero/Hero";
import Navigation from "./navigation/Navigation";
import { AnimationStage, isPageReady } from "./util/animation";

export function Home() {
    const [stage, setStage] = useState<AnimationStage>(AnimationStage.Init);

    return (
        <div className="flex h-full w-full">
            {isPageReady(stage) && <Navigation />}
            <Hero stage={stage} setStage={setStage} />
        </div>
    );
}
