import { Flex, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex flexDir="column" gap={8} align="center">
        <Text fontWeight="bold" fontSize="2xl">
          CS50 Chatbot built using ChatGPT 3.5 Turbo
        </Text>
        <Text>
          This chatbot is built for the CS50x project, and serves as a clone of
          the popular ChatGPT website, but with its own quirks. Instead of
          replying to you in English Language, it will instead reply to you in a
          random language.
        </Text>
        <Image src="images/chatgpt.jpg" />
      </Flex>
    </main>
  );
}
