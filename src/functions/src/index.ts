import * as functions from "firebase-functions";
import CORS from "cors";

const cors = CORS({ origin: true });

export const sayHello = functions.https.onRequest((req, res) =>
	cors(req, res, () => {
		res.send({ data: { success: "ok", body: req.body } });
	})
);
