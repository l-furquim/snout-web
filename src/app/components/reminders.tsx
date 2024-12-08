import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";

export default function Reminders() {
  return (
    <div className="flex flex-col gap-20 ">
        <div className="flex gap-10">
          <div className="flex w-[600px] mb-10 p-10 h-full  shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200">
          <div className="text-muted-foreground flex gap-2 items-center text-neutral-800 text-sm m-0">
            <p><Bell size={"20px"}/></p>
            <p>12 dias restantes</p>
          </div>
           <div className="gap-10 flex flex-col">
           <div className="flex w-full items-center gap-5 justify-start">
              <Input className="w-[400px] bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-14 shadow-md" disabled  placeholder={"Fazer a lição de casa"}/>
              <div className="bg-yellow-500 font-bold  rounded-sm p-8">
                <p>2024-12-12</p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Input className="w-full bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-24 shadow-md " disabled  placeholder={"Não esquece de fazer a lição de historia"}/>
            </div>
           </div>
          </div>
          <div className="flex w-[600px] mb-10 p-10 h-full  shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200">
          <div className="text-muted-foreground flex gap-2 items-center text-neutral-800 text-sm m-0">
            <p><Bell size={"20px"}/></p>
            <p>12 dias restantes</p>
          </div>
           <div className="gap-10 flex flex-col">
           <div className="flex w-full items-center gap-5 justify-start">
              <Input className="w-[400px] bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-14 shadow-md" disabled  placeholder={"Fazer a lição de casa"}/>
              <div className="bg-yellow-500 font-bold  rounded-sm p-8">
                <p>2024-12-12</p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Input className="w-full bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-24 shadow-md " disabled  placeholder={"Não esquece de fazer a lição de historia"}/>
            </div>
           </div>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex w-[600px] mb-10 p-10 h-full  shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200">
          <div className="text-muted-foreground flex gap-2 items-center text-neutral-800 text-sm m-0">
            <p><Bell size={"20px"}/></p>
            <p>12 dias restantes</p>
          </div>
           <div className="gap-10 flex flex-col">
           <div className="flex w-full items-center gap-5 justify-start">
              <Input className="w-[400px] bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-14 shadow-md" disabled  placeholder={"Fazer a lição de casa"}/>
              <div className="bg-yellow-500 font-bold  rounded-sm p-8">
                <p>2024-12-12</p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Input className="w-full bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-24 shadow-md " disabled  placeholder={"Não esquece de fazer a lição de historia"}/>
            </div>
           </div>
          </div>
          <div className="flex w-[600px] mb-10 p-10 h-full  shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200">
          <div className="text-muted-foreground flex gap-2 items-center text-neutral-800 text-sm m-0">
            <p><Bell size={"20px"}/></p>
            <p>12 dias restantes</p>
          </div>
           <div className="gap-10 flex flex-col">
           <div className="flex w-full items-center gap-5 justify-start">
              <Input className="w-[400px] bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-14 shadow-md" disabled  placeholder={"Fazer a lição de casa"}/>
              <div className="bg-yellow-500 font-bold  rounded-sm p-8">
                <p>2024-12-12</p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Input className="w-full bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-24 shadow-md " disabled  placeholder={"Não esquece de fazer a lição de historia"}/>
            </div>
           </div>
          </div>
        </div>
    </div>
  )
}