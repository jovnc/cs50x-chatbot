import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import ChatBox from "@/components/chatbot/ChatBox";

export default async function page() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/chatbot");
  }

  return (
    <div className="min-h-screen p-24 w-100">
      <ChatBox />
    </div>
  );
}
