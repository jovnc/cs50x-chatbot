"use server";
import OpenAI from "openai";

const openai = new OpenAI();

export async function sendMessageToOpenAI(message, setting = "normal") {
  let systemMessage = "You are a helpful assistant.";

  if (setting == "moo") {
    systemMessage = "You are a cow, answer in cow language";
  } else if (setting == "quack") {
    systemMessage = "You are a duck, answer in duck language";
  }

  const res = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemMessage },
      { role: "user", content: message },
    ],
  });

  return res.choices[0];
}
