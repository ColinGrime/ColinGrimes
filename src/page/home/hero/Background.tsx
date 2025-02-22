import p5 from "p5";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import TRUNK from "vanta/src/vanta.trunk";
import { AnimationStage } from "../util/animation";

type Props = {
    stage: AnimationStage;
};

export function Background({ stage }: Props) {
    const vantaRef = useRef<HTMLDivElement>(null);
    const vantaEffectRef = useRef<any>(null);

    useEffect(() => {
        if (!vantaRef.current) {
            return;
        }

        vantaEffectRef.current = TRUNK({
            THREE,
            p5,
            el: vantaRef.current,
            backgroundColor: "var(--color-slate-900)",
            spacing: 0,
            chaos: 0.3,
        });

        return () => vantaEffectRef.current.destroy();
    }, []);

    useEffect(() => {
        if (stage === AnimationStage.TextExplode) {
            vantaEffectRef.current.setOptions({
                chaos: 5,
            });
        }
        vantaEffectRef.current.resize();
    }, [stage]);

    return <div ref={vantaRef} className="absolute -z-10 h-full w-full scale-90 opacity-30" />;
}
