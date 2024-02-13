"use client";
import { Flex, Text } from "@chakra-ui/react";
import SubmitInput from "../SubmitInput";
import ChatArea from "./ChatArea";
import { useForm } from "react-hook-form";
import { sendMessageToOpenAI } from "@/openai";
import { useState } from "react";
import NavArea from "./NavArea";

export default function ChatBox() {
  const { register, handleSubmit } = useForm();
  const [output, setOutput] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [setting, setSetting] = useState("normal");

  const action = handleSubmit(async (data) => {
    setIsLoading(true);
    const res = await sendMessageToOpenAI(data.query, setting);
    setOutput((out) => [
      ...out,
      { message: res.message.content, user_input: data.query },
    ]);
    setIsLoading(false);
  });

  const handleSetting = (e) => {
    console.log(e.target.value);
    setSetting((set) => e.target.value);
  };

  return (
    <>
      <NavArea handleSetting={handleSetting} />
      <Flex
        justify="space-between"
        gap={8}
        flexDir="column"
        className="w-full h-[70vh]"
      >
        <Text>Selected Mode: {setting}</Text>
        <ChatArea data={output} />
        <SubmitInput
          action={action}
          register={register}
          isLoading={isLoading}
        />
      </Flex>
    </>
  );
}
