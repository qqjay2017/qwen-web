"use client";

import React from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const categories = {
    "Basic chat": "basic-chat",
    "Function calling": "function-calling",
    "File search": "file-search",
    All: "all",
  };
  // href={`/examples/${url}`}
  const openNewChat = async () => {
    const res = await fetch("/api/new-chat", {
      method: "POST",
    });
    const { chatId } = await res.json();
    router.push("/chat/" + chatId);
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Explore sample apps built with Assistants API
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <div key={name} className={styles.category} onClick={openNewChat}>
            {name}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
