import { options } from "@/app/api/auth/[...nextauth]/options";
import { Flex, Image, Text } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function NavBar() {
  const session = await getServerSession(options);
  return (
    <nav className="w-full">
      <Flex justify="space-between" p={4}>
        <Flex align="center" gap={4}>
          <Image src="/svg/logo.svg" width={50} height={50} />
          <Text fontWeight="bold">CS50 Chatbot</Text>
        </Flex>
        <Flex gap={8} align="center" px={3}>
          <Link href="/chatbot">Chatbot</Link>
          {session ? (
            <Link href="api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="api/auth/signin">Sign In</Link>
          )}
        </Flex>
      </Flex>
    </nav>
  );
}
