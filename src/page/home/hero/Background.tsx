import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/src/vanta.globe";
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

        vantaEffectRef.current = GLOBE({
            THREE,
            el: vantaRef.current,
            backgroundColor: "white",
            color: "black",
            size: 1.1,
            showDots: false,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
        });
        vantaEffectRef.current.cont2.position.x -= 13;
        vantaEffectRef.current.cont2.position.y -= 10;
        vantaEffectRef.current.cont2.position.z -= 5;

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

    return <div ref={vantaRef} className="left absolute -z-10 h-full w-full opacity-40" />;
}
