import { Inter } from "next/font/google";
import "./globals.css";
import SessionWraper from "@/SessionWraper";
import Recoilwrapper from "./Recoilwrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram",
  description: "Connect with your friends and share your joyful memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/Instagram_logo_2016.svg.png" sizes="any" />
      <body className={inter.className}>
        <Recoilwrapper>
          <SessionWraper>{children}</SessionWraper>
        </Recoilwrapper>
      </body>
    </html>
  );
}
