import { Flex, Text } from "@chakra-ui/react";
import EmptyChat from "./EmptyChat";

export default function ChatArea({ data }) {
  const length = data.length;
  return (
    <Flex
      flexDir="column"
      gap={8}
      className="w-full h-max-full overflow-y-auto"
    >
      {length === 0 && <EmptyChat />}
      {data.map((query, i) => {
        return (
          <Flex key={i} flexDir="column" gap={4}>
            <Flex flexDir="column" gap={2}>
              <Text fontWeight="bold">User</Text>
              <Text>{query.user_input}</Text>
            </Flex>
            <Flex flexDir="column" gap={2}>
              <Text fontWeight="bold">ChatGPT</Text>
              <Text>{query.message}</Text>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
}
