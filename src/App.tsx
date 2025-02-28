import { Toaster } from "sonner";
import "./css/global.css";
import { Home } from "./page/home/Home";

export default function App() {
    return (
        <div className="h-screen w-screen">
            <Home />
            <Toaster visibleToasts={1} position="top-center" richColors toastOptions={{ duration: 2000 }} />
        </div>
    );
}
