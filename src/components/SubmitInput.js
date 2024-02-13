import { Flex, Spinner } from "@chakra-ui/react";
import { IoMdSend } from "react-icons/io";

export default function SubmitInput({ register, action, isLoading }) {
  return (
    <form action={action}>
      <Flex
        className="w-100 w-full border-[0.5px] border-black p-1"
        justify="space-between"
      >
        <input
          type="text"
          placeholder="Message ChatGPT..."
          className="w-full"
          {...register("query")}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? <Spinner /> : <IoMdSend />}
        </button>
      </Flex>
    </form>
  );
}
