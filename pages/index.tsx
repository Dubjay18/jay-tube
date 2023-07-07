"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import DefaultLayout from "@/layouts/DefaultLayout";
import { ScrollArea } from "@/components/ui/scroll-area";
import Grid from "@/components/Grid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <DefaultLayout>
      <ScrollArea className='w-[80vw] mx-auto'>
        <Grid />
      </ScrollArea>
    </DefaultLayout>
  );
}
