import cors from "cors";
import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "./emailService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    limit: 3,
    handler: (_, res) => {
        res.status(429).json("Stop, that's too many emails! :(");
    },
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../client", "index.html"));
});

app.post("/contact", limiter, (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;
    sendEmail(name, email, subject, message)
        .then((response: any) => {
            if (response.success) {
                res.status(200).json(response.message);
            } else {
                res.status(500).json(response.message);
            }
        })
        .catch((error: Error) => {
            console.error("❌ Error sending email:", error);
            res.status(500).json("Your email has failed to send.");
        });
});

app.listen(3001, () => {
    console.log(`Server listening on http://localhost:3001`);
});
