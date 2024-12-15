"use client"
import { Textarea } from "@/components/ui/textarea";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { TipTap } from "./editor";

export default function NewNote(){
  const actualPage = usePathname();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const reminder = actualPage == "/reminder";


  return (
    <div className="flex w-[1400px] ml-10 mr-10 mt-16 p-10 h-full gap-10 shadow-md bg-foreground flex-col rounded-xl justify-start dark:bg-neutral-900 dark:text-zinc-200 bg-zinc-100">
      <div className="flex w-full gap-20 justify-start">
        <Textarea  className="w-[400px] h-fit border-none resize-none focus:outline-none bg-none placeholder:text-zinc-600 placeholder:text-2xl" placeholder={"Titulo"}/>
      </div>
      <div className="flex w-full justify-center">
        <TipTap/>
      </div>
    </div>
  )
}