import fb, { db } from "../../fb";

export interface INewMessage {
	msg: string;
	fromEmail: string;
	subject?: string;
}

const createMessage = async ({ msg, fromEmail, subject }: INewMessage) =>
	db.collection("messages").add({
		createdAt: fb.firestore.Timestamp.fromDate(new Date()),
		msg,
		fromEmail,
		subject
	});

export default createMessage;
