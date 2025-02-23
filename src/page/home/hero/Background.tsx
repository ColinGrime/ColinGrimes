import { useEffect, useRef } from "react";
import * as THREE from "three";
import GLOBE from "vanta/src/vanta.globe";

export function Background() {
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!vantaRef.current) {
            return;
        }

        const effect = GLOBE({
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
        effect.cont2.position.x -= 13;
        effect.cont2.position.y -= 10;
        effect.cont2.position.z -= 5;

        return () => effect.destroy();
    }, []);

    return <div ref={vantaRef} className="left absolute -z-10 h-full w-full opacity-40" />;
}
