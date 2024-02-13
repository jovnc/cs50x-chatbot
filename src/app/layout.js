import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CS50 Chatbot",
  description: "CS50 Chatbot built with ChatGPT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
