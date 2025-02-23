import { VariantLabels, Variants } from "framer-motion";

/**
 * The animation stages for the homepage.
 */
export enum AnimationStage {
    Init,
    Typing,
    TypingBreak,
    TextShrink,
    TextExplode,
    Completed,
}

/**
 * Checks if the page is ready for content.
 * Content is ready once the intro text has exploded or is done exploding.
 * @param stage the current stage
 * @returns true if the page is ready for content display
 */
export function isPageReady(stage: AnimationStage): boolean {
    return stage === AnimationStage.TextExplode || stage === AnimationStage.Completed;
}

export const cursorVariantMap: Record<AnimationStage, VariantLabels> = {
    [AnimationStage.Init]: "blinking",
    [AnimationStage.Typing]: "still",
    [AnimationStage.TypingBreak]: "blinking",
    [AnimationStage.TextShrink]: "invisible",
    [AnimationStage.TextExplode]: "invisible",
    [AnimationStage.Completed]: "invisible",
};

export const textVariantMap: Record<AnimationStage, VariantLabels> = {
    [AnimationStage.Init]: "move",
    [AnimationStage.Typing]: "move",
    [AnimationStage.TypingBreak]: "move",
    [AnimationStage.TextShrink]: "shrink",
    [AnimationStage.TextExplode]: "init",
    [AnimationStage.Completed]: "init",
};

export const charVariantMap: Record<AnimationStage, VariantLabels> = {
    [AnimationStage.Init]: "init",
    [AnimationStage.Typing]: "init",
    [AnimationStage.TypingBreak]: "init",
    [AnimationStage.TextShrink]: "init",
    [AnimationStage.TextExplode]: "explode",
    [AnimationStage.Completed]: "invisible",
};

export const cursorVariants: Variants = {
    still: {
        opacity: 1,
    },
    blinking: {
        opacity: [1, 0, 1],
        transition: { duration: 0.8, repeat: Infinity },
    },
    invisible: {
        opacity: [null, 0],
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const textVariants: Variants = {
    init: {
        scale: 1,
        opacity: 1,
    },
    move: {
        scaleX: 1.03,
        transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" },
    },
    shrink: {
        scale: [1, 0.9],
        opacity: [1, 0.8],
        color: ["#000000", "#180000", "#300000", "#480000", "#600000", "#780000", "#900000"],
        transition: { duration: 1, ease: "easeOut" },
    },
};

export const charVariants: Variants = {
    init: {
        scale: 1,
        opacity: 1,
    },
    explode: () => ({
        x: (Math.random() - 0.5) * 3000,
        y: (Math.random() - 0.5) * 3000,
        scale: 2,
        opacity: 0,
        transition: { duration: 0.4, ease: "easeOut" },
    }),
    invisible: {
        opacity: 0,
    },
};
