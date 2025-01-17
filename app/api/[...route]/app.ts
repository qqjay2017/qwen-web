import { Hono } from "hono";
import { generateId, streamText } from "ai";
import { openai } from "@/app/openai";

const app = new Hono().basePath("/api");
import { stream } from "hono/streaming";

app.post("/chat", async (c) => {
  const bodyJson = await c.req.json();
  const result = streamText({
    model: openai("qwen-plus"),
    system: "You are a helpful assistant.",
    messages: bodyJson.messages,
    tools: {
      //     addResource: tool({
      //         escription: `add a resource to your knowledge base.
      //   If the user provides a random piece of knowledge unprompted, use this tool without asking for confirmation.`,
      //     })
    },
  });

  c.header("X-Vercel-AI-Data-Stream", "v1");
  c.header("Content-Type", "text/plain; charset=utf-8");

  return stream(c, (stream) => stream.pipe(result.toDataStream()));
});

app.post("/new-chat", (c) => {
  const newId = generateId();
  return c.json({
    chatId: newId,
  });
});

export default app;
