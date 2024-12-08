import { Input } from "@/components/ui/input";

export default function Notes() {
  return (
    <div className="flex flex-col gap-20 ">
        <div className="flex gap-10">
          <div className="flex w-[600px] mb-10 p-10 h-full gap-10 shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200">
            <div className="flex w-full items-center gap-5 justify-start">
              <Input className="w-[400px] bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-14 shadow-md" disabled  placeholder={"Nao curti hoje"}/>
              <div className="bg-yellow-500 font-bold  rounded-sm p-8">
                <p>2024-12-12</p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Input className="w-full bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-24 shadow-md " disabled  placeholder={"Peidei na farofa do almoço"}/>
            </div>
        </div>
        <div className="flex w-[600px] mb-10 p-10 h-full gap-10 shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200">
            <div className="flex w-full items-center gap-5 justify-start">
              <Input className="w-[400px] bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-14 shadow-md" disabled  placeholder={"Titulo"}/>
              <div className="bg-yellow-500 font-bold  rounded-sm p-8">
                <p>2024-12-12</p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Input className="w-full bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-24 shadow-md " disabled  placeholder={"Conteudo"}/>
            </div>
        </div>
        </div>
        <div className="flex gap-10">
          <div className="flex w-[600px] mb-10 p-10 h-full gap-10 shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200">
            <div className="flex w-full items-center gap-5 justify-start">
              <Input className="w-[400px] bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-14 shadow-md" disabled  placeholder={"Nao curti hoje"}/>
              <div className="bg-yellow-500 font-bold  rounded-sm p-8">
                <p>2024-12-12</p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Input className="w-full bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-24 shadow-md " disabled  placeholder={"Peidei na farofa do almoço"}/>
            </div>
        </div>
        <div className="flex w-[600px] mb-10 p-10 h-full gap-10 shadow-md bg-foreground flex-col rounded-sm justify-center bg-zinc-200">
            <div className="flex w-full items-center gap-5 justify-start">
              <Input className="w-[400px] bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-14 shadow-md" disabled  placeholder={"Titulo"}/>
              <div className="bg-yellow-500 font-bold  rounded-sm p-8">
                <p>2024-12-12</p>
              </div>
            </div>
            <div className="flex w-full justify-center">
              <Input className="w-full bg-zinc-300 placeholder:text-neutral-800 placeholder:font-bold border-none rounded-sm h-24 shadow-md " disabled  placeholder={"Conteudo"}/>
            </div>
        </div>
        </div>
    </div>
  )
}