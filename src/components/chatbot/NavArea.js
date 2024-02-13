import { Button, Flex } from "@chakra-ui/react";

export default function NavArea({ handleSetting }) {
  return (
    <Flex py={4} gap={4}>
      <Button onClick={handleSetting} value="normal">
        Normal
      </Button>
      <Button onClick={handleSetting} value="quack">
        Quack
      </Button>
      <Button onClick={handleSetting} value="moo">
        Moo
      </Button>
    </Flex>
  );
}
