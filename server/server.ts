import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";
import fs from "fs";
import http from "http";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";
import { sendEmail } from "./emailService.js";

dotenv.config();

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
            console.error("Error sending email:", error);
            res.status(500).json("Your email has failed to send.");
        });
});

if (process.env.NODE_ENV === "production") {
    const SSL_CERT_FILE = process.env.SSL_CERT_FILE || "/certs/fullchain.pem";
    const SSL_KEY_FILE = process.env.SSL_KEY_FILE || "/certs/privkey.pem";

    const options = {
        key: fs.readFileSync(SSL_KEY_FILE),
        cert: fs.readFileSync(SSL_CERT_FILE),
    };

    https.createServer(options, app).listen(443, () => {
        console.log("HTTPS Server running on port 443.");
    });

    // Create HTTP server for redirecting to HTTPS server.
    http.createServer((req, res) => {
        res.writeHead(301, { Location: "https://" + req.headers.host + req.url });
        res.end();
    }).listen(80, () => {
        console.log("Redirecting HTTP to HTTPS on port 80.");
    });
} else {
    app.listen(3001, () => {
        console.log("Development Server running on http://localhost:3001.");
    });
}
