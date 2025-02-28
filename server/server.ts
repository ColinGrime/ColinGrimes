import cors from "cors";
import express, { Request, Response } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "./emailService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client", "index.html"));
});

app.post("/contact", (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;
    sendEmail(name, email, subject, message)
        .then((response: any) => {
            if (response.success) {
                res.status(200).json({ message: response.message });
            } else {
                res.status(500).json({ message: response.message });
            }
        })
        .catch((error: Error) => {
            console.error("❌ Error sending email:", error);
            res.status(500).json({ message: "Email failed to send." });
        });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
