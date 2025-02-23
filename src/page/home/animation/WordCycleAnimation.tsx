import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { wordCycleText } from "../../../config/settings";

export function WordCycleAnimation() {
    const [animationStart, setAnimationStart] = useState(false);
    const [currTextIndex, setCurrTextIndex] = useState(0);

    useEffect(() => {
        if (!animationStart) {
            return;
        }

        const interval = setInterval(() => {
            setTimeout(() => {
                setCurrTextIndex((prev) => (prev + 1) % wordCycleText.length);
            }, 150);
        }, 3000);

        return () => clearInterval(interval);
    }, [animationStart]);

    return (
        <motion.span
            animate={{ rotate: [0, 360, 360], scaleX: 1.02, scaleY: 1.05 }}
            transition={{
                rotate: {
                    duration: 3,
                    times: [0, 0.1, 1],
                    repeat: Infinity,
                    ease: "linear",
                },
                scaleX: {
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                },
                scaleY: {
                    duration: 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                },
            }}
            onAnimationStart={() => setAnimationStart(true)}
            className="inline-block"
        >
            {wordCycleText[currTextIndex]}
        </motion.span>
    );
}
