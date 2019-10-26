import firebase from "../../fb";

export interface INewMessage {
	msg: string;
	fromEmail: string;
	subject?: string;
}

const createMessage = async ({ msg, fromEmail, subject }: INewMessage) =>
	firebase
		.firestore()
		.collection("messages")
		.add({
			createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
			msg,
			fromEmail,
			subject
		});

export default createMessage;
