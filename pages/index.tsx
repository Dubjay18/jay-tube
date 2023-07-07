"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import DefaultLayout from "@/layouts/DefaultLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <DefaultLayout>
      <main
        className={`flex dark min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
        you can use the <code>useClient</code> hook in any
        component
      </main>
    </DefaultLayout>
  );
}
