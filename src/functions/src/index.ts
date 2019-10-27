import * as functions from "firebase-functions";
import nodemailer from "nodemailer";

export const sendEmail = functions.firestore
	.document("messages")
	.onCreate(async (doc) => {
		const data = doc.data();
		if (!data) return;
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 587,
			secure: false,
			auth: {
				user: functions.config().email.address,
				pass: functions.config().email.secret
			}
		});

		try {
			const email = await transporter.sendMail({
				from: `"ITOTITOTI" <${data.fromEmail}>`,
				to: functions.config().email.address,
				subject: `ITO LEAD - ${data.subject}`,
				text: data.msg
			});
			console.info(`Message sent: ${email.messageId}`);
		} catch {
			throw new Error("Could not send email");
		}
	});
