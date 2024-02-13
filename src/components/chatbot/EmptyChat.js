import { Flex, Text } from "@chakra-ui/react";

export default function EmptyChat() {
  return (
    <Flex align="center" flexDir="column">
      <Flex
        className="bg-slate-200 w-3/4 p-5 rounded-lg"
        align="center"
        gap={4}
        flexDir="column"
      >
        <Text fontWeight="bold">
          Welcome to the CS50 Chatbot powered by GPT 3.5-Turbo!
        </Text>
        <Text align="center">
          You can start chatting with the chatbot by typing into the input field
          below! Look out for what interesting responses the chatbot may
          produce!
        </Text>
      </Flex>
    </Flex>
  );
}
