import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { introText, introTextSpeedMs } from "../../../config/settings";
import { AnimationStage, charVariantMap, charVariants, textVariantMap, textVariants } from "../util/animation";
import { addNextIntroCharacter, isLastVisibleLine } from "../util/util";
import Cursor from "./Cursor";

type Props = {
    stage: AnimationStage;
    setStage: Dispatch<SetStateAction<AnimationStage>>;
};

export default function Animation({ stage, setStage }: Props) {
    const [text, setText] = useState<string[]>([""]);

    useEffect(() => {
        // Wait to start the animation.
        if (stage === AnimationStage.Init) {
            setTimeout(() => setStage(AnimationStage.Typing), 1000);
        }

        // Displays the intro text over time.
        let interval: NodeJS.Timer;
        if (stage === AnimationStage.Typing) {
            interval = setInterval(() => setText((prev) => addNextIntroCharacter(prev)), introTextSpeedMs);
        }

        // Waits before each line.
        if (stage === AnimationStage.TypingBreak) {
            setTimeout(() => setStage(AnimationStage.Typing), 600);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [stage]);

    useEffect(() => {
        if (text[text.length - 1] === "") {
            setStage(AnimationStage.TypingBreak);
        } else if (JSON.stringify(text) === JSON.stringify(introText)) {
            setTimeout(() => setStage(AnimationStage.TextShrink), 200);
        }
    }, [text]);

    return (
        <motion.div
            animate={textVariantMap[stage]}
            variants={textVariants}
            onAnimationComplete={(variant) => {
                if (variant === "shrink") {
                    setStage(AnimationStage.TextExplode);
                }
            }}
            className="flex h-full w-full flex-col items-center justify-center gap-5 text-6xl whitespace-nowrap"
        >
            {text
                .filter((line, i) => i === 0 || line.length > 0)
                .map((line, i) => (
                    <div key={i} className="inline-flex">
                        {line.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                animate={charVariantMap[stage]}
                                variants={charVariants}
                                onAnimationComplete={(variant) => {
                                    if (stage === AnimationStage.TextExplode && variant === "explode") {
                                        setStage(AnimationStage.Completed);
                                    }
                                }}
                                className="inline-block cursor-default"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        {isLastVisibleLine(text, i) && <Cursor stage={stage} />}
                    </div>
                ))}
        </motion.div>
    );
}
