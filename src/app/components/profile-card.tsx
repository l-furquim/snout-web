"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";


export default function ProfileCard(){
  const [editing, setEditing] = useState<boolean>(true);
  const {toast} = useToast();

  function editInfos() {
    setEditing(false);
  }

  function saveChanges(){
    setEditing(true);

    toast({
      title: "Mudanças realizadas",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: (
        <ToastAction altText="Goto schedule to undo">Fechar</ToastAction>
      ),
    })

  }


  return (
    <>
    <div className="flex flex-col   w-full h-fit items-center">
      {/* <div>
      <AspectRatio ratio={16 / 9}>
        <Image width={"200"} height={"200"} src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Image" className="rounded-md object-cover"/>
      </AspectRatio>
      </div> */}
      <div className="flex h-fit gap-20 items-center">
        <div className="flex w-fit justify-start">
        <Avatar>
          <AvatarImage className="rounded-full" width={"100"} height={"100"} src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-xl">Lucas</h1>
          <Input disabled={editing} type="text" defaultValue={"Adoro comer bosta"} className="border-zinc-300  border-[1px] shadow-none hover:cursor-default disabled:border-none"></Input>
        </div>
        <div className="flex ml-auto w-fit gap-10">
        <Button onClick={() => editInfos()} className="bg-neutral-800 hover:bg-neutral-700   text-zinc-200 rounded-md">Editar</Button>
        {!editing ?  <Button onClick={() => saveChanges()} className="bg-neutral-800 hover:bg-neutral-700   text-zinc-200 rounded-md">Salvar</Button> : <></>}
        </div>
      </div>
    </div>
    <div className="flex font-bold flex-col w-full gap-10 justify-center items-center">
    <div className="flex gap-20 justify-center items-center">
      <h1>Nome</h1>
      <Input  type="text" id="inputInfo" defaultValue={"Lucas Hernandes"} disabled={editing}   className="border-zinc-300 w-80 border-[1px] rounded-sm"/>
    </div>
    <div className="flex gap-20  justify-center items-center">
      <h1>Email</h1>
      <Input  type="text" id="inputInfo" defaultValue={"lucas@gmail.com"} disabled={editing}  className="border-zinc-300 w-80 border-[1px] rounded-sm"/>
    </div>
    <div className="flex gap-20  justify-center items-center">
      <h1>Senha</h1>
      <Input  type="password" id="inputInfo" defaultValue={"ishow123"} disabled={editing}  className="border-zinc-300 w-80 border-[1px] rounded-sm"/>
    </div>
  </div>
  </>
  )
  }