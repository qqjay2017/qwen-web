"use client";

import React, { useRef } from "react";
import styles from "./chat.module.css";

import { useChat } from "ai/react";
import type { Message } from "ai/react";
import Markdown from "react-markdown";

const UserMessage = ({ content }: { content: string }) => {
  return <div className={styles.userMessage}>{content}</div>;
};

const AssistantMessage = ({ content }: { content: string }) => {
  return (
    <div className={styles.assistantMessage}>
      <Markdown>{content}</Markdown>
    </div>
  );
};

const CodeMessage = ({ content }: { content: string }) => {
  return (
    <div className={styles.codeMessage}>
      {content.split("\n").map((line, index) => (
        <div key={index}>
          <span>{`${index + 1}. `}</span>
          {line}
        </div>
      ))}
    </div>
  );
};

const Message = (message: Message) => {
  const { role, content } = message;
  console.log(message, "message");
  switch (role) {
    case "user":
      return <UserMessage content={content} />;
    case "assistant":
      return <AssistantMessage content={content} />;
    case "data":
      return <CodeMessage content={content} />;
    default:
      return null;
  }
};

const Chat = () => {
  const id = "123";
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // const [messages, setMessages] = useState<Message[]>([]);

  const { messages, handleSubmit, input, handleInputChange, isLoading } =
    useChat({
      id,
      body: { id, modelId: "" },
      initialMessages: [],
      experimental_throttle: 100,
      onFinish: () => {
        // mutate('/api/history');
      },
    });

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <Message key={index} {...msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`${styles.inputForm} ${styles.clearfix}`}
      >
        <input
          type="text"
          className={styles.input}
          value={input}
          onChange={handleInputChange}
          disabled={isLoading}
          placeholder="Enter your question"
        />
        <button type="submit" className={styles.button} disabled={isLoading}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
