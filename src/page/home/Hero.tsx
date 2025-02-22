import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { introTextSpeedMs } from "../../config/settings";
import { Background } from "./Background";
import Cursor from "./Cursor";
import { AnimationStage, charVariantMap, charVariants, textVariantMap, textVariants } from "./util/animation";
import { addNextIntroCharacter, isLastVisibleLine } from "./util/util";

type Props = {
    stage: AnimationStage;
    setStage: Dispatch<SetStateAction<AnimationStage>>;
};

export default function Hero({ stage, setStage }: Props) {
    const [text, setText] = useState<string[]>([""]);

    useEffect(() => {
        // Wait to start the animation.
        if (stage === AnimationStage.Init) {
            setTimeout(() => setStage(AnimationStage.Typing), 1000);
        }

        // Displays the intro text over time.
        let interval: NodeJS.Timer;
        if (stage === AnimationStage.Typing) {
            interval = setInterval(() => {
                setText((prev) => {
                    const newText = addNextIntroCharacter(prev);
                    if (newText[newText.length - 1] === "") {
                        setStage(AnimationStage.TypingBreak);
                    } else if (prev === newText) {
                        setTimeout(() => setStage(AnimationStage.TextShrink), 200);
                    }
                    return newText;
                });
            }, introTextSpeedMs);
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

    // <img src="computer.svg" className="mr-20 h-100 w-100" />
    return (
        <div className="relative flex h-full flex-grow items-center justify-center">
            <Background stage={stage} />
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
        </div>
    );
}
