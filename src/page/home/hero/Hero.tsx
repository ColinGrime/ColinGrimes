import { Dispatch, SetStateAction } from "react";
import { AnimationStage, isPageReady } from "../util/animation";
import { Background } from "./Background";
import Animation from "./IntroAnimation";

type Props = {
    stage: AnimationStage;
    setStage: Dispatch<SetStateAction<AnimationStage>>;
};

export default function Hero({ stage, setStage }: Props) {
    return (
        <div className="relative flex h-full flex-grow items-center justify-center">
            {stage !== AnimationStage.Completed && <Animation stage={stage} setStage={setStage} />}
            {isPageReady(stage) && (
                <>
                    <div className="hidden h-full w-full xl:block">
                        <Background />
                    </div>
                    <div className="absolute top-30 left-20 flex w-125 flex-col gap-5 self-start">
                        <h1 className="text-3xl font-bold">Hello!</h1>
                        <div>
                            <p>I'm Colin.</p>
                            <p>I'm a software engineer.</p>
                        </div>
                        <p>
                            Mollit magna enim minim. In ad sunt quis cupidatat irure consectetur ut adipisicing ut proident aliqua commodo dolor laborum nulla.
                            Quis velit incididunt irure nulla excepteur nulla eiusmod nostrud nostrud. Sunt amet quis consectetur elit mollit ullamco nostrud ea
                            laborum cillum sit aute in laborum. Qui eiusmod nisi tempor. Anim nulla veniam occaecat dolore aliqua qui anim officia eiusmod
                            officia ullamco. Irure occaecat dolore dolore sit sunt tempor non ullamco. Reprehenderit eiusmod ut cupidatat fugiat est esse ipsum
                            nulla nisi cillum. Mollit non aliqua aute et aliqua nulla laboris incididunt incididunt proident commodo deserunt. Occaecat sit
                            aliqua ex id mollit deserunt. Nostrud ea officia veniam eiusmod duis nostrud mollit consectetur ad. Cupidatat incididunt consequat
                            Lorem. Quis irure anim sunt. Pariatur tempor in pariatur ipsum.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
