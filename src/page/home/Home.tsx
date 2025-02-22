import { useState } from "react";
import Hero from "./Hero";
import Navigation from "./Navigation";
import { AnimationStage } from "./util/animation";

export function Home() {
    const [stage, setStage] = useState<AnimationStage>(AnimationStage.Init);

    return (
        <div className="flex h-full w-full">
            {(stage === AnimationStage.TextExplode || stage === AnimationStage.Completed) && <Navigation stage={stage} />}
            <Hero stage={stage} setStage={setStage} />
        </div>
    );
}
