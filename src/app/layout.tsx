import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "@/app/globals.css";
import { Navbar } from "./components/layout/Navbar";

export const metadata: Metadata = {
  title: "Predictable Pipeline | SaaS Demand Engine",
  description:
    "We build revenue architecture that turns cold traffic into predictable demand and booked demos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
