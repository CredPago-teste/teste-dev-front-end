import React, { useEffect } from "react";
import { MdError, MdInfo, MdClose, MdCheckCircle } from "react-icons/md";

import { Container } from "./styles";

import { ToastMessage, useToast } from "../../../hooks/toast";

interface ToastProps {
  message: ToastMessage;
  style: object;
}

const icons = {
  info: <MdInfo />,
  success: <MdCheckCircle />,
  error: <MdError />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={Number(!!message.description)}
      style={style}
    >
      {icons[message.type || "info"]}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button
        type="button"
        onClick={() => {
          removeToast(message.id);
        }}
      >
        <MdClose />
      </button>
    </Container>
  );
};

export default Toast;
