import fb, { db } from "../../fb";

export interface INewMessageRaw {
  msg: string;
  fromEmail: string;
  subject?: string;
}

interface INewMessage {
  from: string;
  to?: string;
  message: {
    text: string;
    subject?: string;
  };
}

const onCreateMessage = async ({
  to = "emmanuel@herrero.io",
  from,
  message,
}: INewMessage) =>
  db.collection("messages").add({
    createdAt: fb.firestore.FieldValue.serverTimestamp(),
    to,
    from,
    replyTo: from,
    message,
  });

const createMessage = async ({
  msg: text,
  fromEmail: from,
  subject,
}: INewMessageRaw) => {
  const sanitizedMessage: INewMessage = {
    from,
    message: { text, subject: `[ITOLEAD] ${subject}` },
  };

  return onCreateMessage(sanitizedMessage);
};

export default createMessage;
