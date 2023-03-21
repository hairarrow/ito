import { useContext, useState, useRef, useEffect, ChangeEvent } from "react";
import { ContactContext } from "./Contact.context";
import StyledContact from "./Contact.styles";
import useAnimation from "./Contact.animation";
import createMessage from "./createMessage";
import useAnalytics from "../../hooks/useAnalytics";

const PERSONAL_EMAIL = "emmanuel@herrero.io";

const Contact = () => {
  const defaultFields = {
    msg: "",
    fromEmail: "",
    subject: "",
  };
  const defaultValid = {
    email: false,
    message: false,
  };
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const {
    state: { showMessage },
    dispatch,
  } = useContext(ContactContext);
  const [fields, setFields] = useState(defaultFields);
  const [valid, setValid] = useState(defaultValid);
  const [loading, setLoading] = useState(false);
  const [displayContainer, setDisplayContainer] = useState(showMessage);
  const analytics = useAnalytics();

  useAnimation(
    containerRef,
    showMessage,
    () => {
      setDisplayContainer(true);
    },
    () => {
      setDisplayContainer(showMessage);
    }
  );

  const toggle = () => {
    dispatch({ type: "UpdateShowMessage", value: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (Object.keys(valid).every((k) => valid[k])) {
      analytics.logEvent<string>("send_message");
      try {
        await createMessage(fields);
        setFields(defaultFields);
        setValid(defaultValid);
        toggle();
      } catch {
        analytics.logEvent<string>("send_message_failed");
        alert(
          `Message Could Not Be Sent. Please try again in a couple of seconds or send your message directly to ${PERSONAL_EMAIL}`
        );
      }
    }

    setLoading(false);
  };

  const handleChangeSubject = (e: ChangeEvent<HTMLInputElement>) => {
    setFields({ ...fields, subject: e.currentTarget.value });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      validity: { valid: email },
      value: fromEmail,
    } = e.currentTarget;
    setValid({ ...valid, email });
    setFields({ ...fields, fromEmail });
  };

  const handleChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      validity: { valid: message },
      value: msg,
    } = e.currentTarget;
    setValid({ ...valid, message });
    setFields({ ...fields, msg });
  };

  const handleClick = (e: any) => {
    if (formRef.current.contains(e.target)) {
    } else toggle();
  };

  useEffect(() => {
    if (showMessage) {
      document.addEventListener("mousedown", handleClick);
      analytics.logEvent<string>("open_contact_modal");
    } else document.removeEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [showMessage]);

  return (
    <StyledContact
      ref={containerRef}
      className={`msg ${displayContainer ? "msg--open" : ""}`}
      aria-hidden={!displayContainer}
      data-background-click="enabled"
      title="Cancel"
    >
      <section role="dialog" aria-labelledby="dialogTitle">
        <button className="cancel" onClick={toggle}>
          Cancel
        </button>
        <h1 className="title" id="dialogTitle">
          Say hello
        </h1>
        <form ref={formRef} className="form" onSubmit={handleSubmit}>
          <label
            className={`send-container ${
              Object.keys(valid).every((key) => valid[key])
                ? "send-container--valid"
                : ""
            } ${loading ? "send-container--loading" : ""}`}
          >
            <span className="send-label">Send</span>
            <input type="submit" value="Send" />
          </label>
          <label htmlFor="msg_to" className="label--disabled">
            <span>To:</span>
            <input
              id="msg_to"
              type="email"
              name="email"
              value={PERSONAL_EMAIL}
              disabled
            />
          </label>{" "}
          <label htmlFor="msg_email" className="required">
            <span>From:</span>
            <input
              value={fields.fromEmail}
              id="msg_email"
              type="email"
              name="email"
              placeholder="ryan@email.com"
              required
              onChange={handleChangeEmail}
            />
          </label>
          <label htmlFor="msg_subject">
            <span>Subject:</span>
            <input
              id="msg_subject"
              type="text"
              name="subject"
              value={fields.subject}
              onChange={handleChangeSubject}
            />
          </label>
          <label
            htmlFor="msg_body"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            Body:
          </label>
          <textarea
            onChange={handleChangeMessage}
            id="msg_body"
            name="body"
            placeholder="Message"
            value={fields.msg}
          />
        </form>
      </section>
    </StyledContact>
  );
};

export default Contact;
