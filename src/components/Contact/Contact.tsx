import { useContext, useState, useRef, useEffect, ChangeEvent } from "react";
import { ContactContext } from "./Contact.context";
import StyledContact from "./Contact.styles";
import useAnimation from "./Contact.animation";
import createMessage from "./createMessage";
import useAnalytics from "../../hooks/useAnalytics";
import cn from "clsx";

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
  const [showSuccess, setShowSuccess] = useState(true);
  const analytics = useAnalytics();

  const formIsValid = Object.keys(valid).every((key) => {
    return Boolean(valid[key]);
  });

  useAnimation(
    containerRef,
    showMessage,
    () => {
      setDisplayContainer(true);
    },
    () => {
      setDisplayContainer(showMessage);
      if (showSuccess) {
        setShowSuccess(false);
      }
    }
  );

  const toggle = () => {
    dispatch({ type: "UpdateShowMessage", value: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formIsValid) {
      analytics.logEvent<string>("send_message");
      try {
        await createMessage(fields);
        setFields(defaultFields);
        setValid(defaultValid);
        setShowSuccess(true);
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
    setValid({ ...valid, message: message && Boolean(msg) });
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

  useEffect(() => {
    if (showSuccess) {
      setTimeout(() => {
        toggle();
      }, 3000);
    }
  }, [showSuccess]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        formRef.current.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true })
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [displayContainer]);

  return (
    <StyledContact
      ref={containerRef}
      className={cn("msg", displayContainer && "msg--open")}
      aria-hidden={!displayContainer}
      data-background-click="enabled"
      title="Contact me"
    >
      <section
        role="dialog"
        aria-labelledby="dialogTitle"
        className={cn(loading && "pulse")}
      >
        <button
          className={cn("cancel", (showSuccess || loading) && "fade-out")}
          onClick={toggle}
        >
          Cancel
        </button>
        <h2 className={cn("title", showSuccess && "fade-out")} id="dialogTitle">
          Say hello
        </h2>
        <form
          ref={formRef}
          className={cn("form", showSuccess && "form--success")}
          onSubmit={handleSubmit}
        >
          <div className="success-container">
            <div className="content">
              <h2>
                <span className="success-icon" role="img" aria-label="Mailbox">
                  📬
                </span>
                Message sent!
              </h2>
              <p>
                I'll get back to you as soon as possible. Thanks for reaching
                out!
              </p>
            </div>
          </div>
          <div className="form-fields">
            <div
              className={cn(
                "send-container b-bottom",
                formIsValid && "send-container--valid",
                loading && "send-container--loading"
              )}
            >
              <label htmlFor="send_message">
                <span className="send-label">Send</span>
                <input
                  id="send_message"
                  type="submit"
                  value="Send message"
                  disabled={!formIsValid}
                />
              </label>
            </div>
            <label htmlFor="msg_to" className="label--disabled b-bottom">
              <span>To:</span>
              <input
                id="msg_to"
                type="email"
                name="email"
                value={PERSONAL_EMAIL}
                disabled
              />
            </label>
            <label htmlFor="msg_email" className="required b-bottom">
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
            <label htmlFor="msg_subject" className="b-bottom">
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
              required
            />
          </div>
        </form>
      </section>
    </StyledContact>
  );
};

export default Contact;
