import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async (name: string, email: string, subject: string, message: string) => {
    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: subject,
            text: message,
        });

        console.log("📧 Email sent successfully.");
        return { success: true, message: "Your email has been successfully sent!" };
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return { success: false, message: "Your email has failed to send." };
    }
};
