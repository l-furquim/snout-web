"use client"

import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PopoverContent } from "@radix-ui/react-popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar"
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { TipTap } from "./editor";

export default function NewNote(){
  const actualPage = usePathname();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const reminder = actualPage == "/reminder";


  return (
    <div className="flex w-[1400px] ml-10 mr-10 mt-16 p-10 h-full gap-10 font-bold shadow-md bg-foreground flex-col rounded-xl justify-start dark:bg-neutral-900 dark:text-zinc-200 bg-zinc-100">
      <div className="flex w-full gap-20 justify-start">
        <Textarea  className="w-[400px] h-fit border-none resize-none focus:outline-none bg-none placeholder:text-zinc-600 placeholder:text-2xl" placeholder={"Titulo"}/>

              {reminder ? <div className="flex flex-col gap-5 justify-center">
                            <p>Data a ser lembrado</p>
                            <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              
                              className={cn(
                                "w-[280px] justify-start bg-zinc-300 text-neutral-800 hover:bg-zinc-400 text-left font-normal",
                                !date && "text-muted-foreground"
                              )} 
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? `${date.toLocaleString('pt-BR').substring(0,10)}` : <span>Escolha uma data</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-zinc-200">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        </div> 
                        : 
                        <></>
              }

      </div>
      <div className="flex w-full justify-center">
        {/* <Textarea className="w-full h-24 shadow-md border-none resize-none bg-zinc-300" placeholder={"Conteudo"}/> */}
        <TipTap/>
      </div>
       

      {/* <div className="flex justify-end ">
      <Button className="w-28 h-10 rounded-sm font-bold text-zinc-200 bg-neutral-800 dark:text-neutral-800 dark:hover:bg-zinc-200 hover:bg-neutral-800 dark:bg-zinc-300">Anotar</Button>
      </div> */}
    </div>
  )
}