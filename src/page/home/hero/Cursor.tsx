import { motion } from "framer-motion";
import { AnimationStage, cursorVariantMap, cursorVariants } from "../util/animation";

type Props = {
    stage: AnimationStage;
};

export default function Cursor({ stage }: Props) {
    return <motion.div animate={cursorVariantMap[stage]} variants={cursorVariants} className="ml-1 h-[1em] w-[0.08em] bg-blue-400" />;
}
