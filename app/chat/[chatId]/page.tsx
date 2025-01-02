"use client";

import React from "react";
import styles from "./page.module.css"; // use simple styles for demonstration purposes
import Chat from "@/components/chat";

const Home = ({ params }) => {
  const { chatId } = React.use<{ chatId: string }>(params);
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Chat id={chatId} />
      </div>
    </main>
  );
};

export default Home;
