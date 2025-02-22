import { useState } from "react";
import Hero from "./hero/Hero";
import Navigation from "./Navigation";
import { AnimationStage } from "./util/animation";

export function Home() {
    const [stage, setStage] = useState<AnimationStage>(AnimationStage.Init);

    return (
        <div className="flex h-full w-full">
            {(stage === AnimationStage.TextExplode || stage === AnimationStage.Completed) && <Navigation />}
            <Hero stage={stage} setStage={setStage} />
        </div>
    );
}
