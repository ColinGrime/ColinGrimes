import "./css/global.css";
import { Home } from "./page/home/Home";

export default function App() {
    return (
        <div className="font-op h-screen w-screen overflow-hidden font-[Quicksand] text-gray-900 dark:text-white">
            <Home />
        </div>
    );
}
