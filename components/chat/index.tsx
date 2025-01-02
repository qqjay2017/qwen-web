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

const Chat = ({ id = "" }: { id: string }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // const [messages, setMessages] = useState<Message[]>([]);

  const { messages, handleSubmit, input, handleInputChange, isLoading } =
    useChat({
      id,
      body: { id, modelId: "" },
      initialMessages: [
        {
          id: "lCHpINykeTelhkvJ",
          // createdAt: "2024-12-31T07:36:54.656Z",
          role: "user",
          content: "你好",
        },
        {
          id: "th6lDlWao85QKboq",
          role: "assistant",
          content:
            "你好！有什么可以帮助你的吗？如果你有任何问题或需要进一步的帮助，随时告诉我哦！😊",
        },
        {
          id: "Rnw9ck1PIOyWZOZz",
          // createdAt: "2024-12-31T07:37:23.655Z",
          role: "user",
          content: "你是谁",
        },
        {
          id: "5F0YoLHihCECDaEc",
          role: "assistant",
          content:
            "你好！\n\n我是通义千问，阿里巴巴推出的一个AI预训练模型，主要功能是生成与给定词语相关的高质量文本，以帮助用户提高创造力和创新能力。",
        },
      ],
      experimental_throttle: 100,
      onFinish: () => {
        console.log("onFinish");
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
