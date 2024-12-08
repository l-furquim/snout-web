import { usePathname } from "next/navigation";

export default function NavBar(){
  function getActualPage (){
    const url = usePathname();
  
    console.log(url)
    
    if(url == "/notes"){
      return (
        <>
            <h3 onClick={() => location.replace("/notes")} className="text-zinc-400 hover:cursor-pointer ">Notas</h3>
            <h3 onClick={() => location.replace("/reminder")} className="hover:cursor-pointer hover:text-zinc-400">Lembretes</h3>
            <h3 onClick={() => location.replace("/profile")} className="hover:cursor-pointer hover:text-zinc-400">Perfil</h3>
        </>
      )
    }
    if(url == "/reminder"){
      return (
        <>
          <h3 onClick={() => location.replace("/notes")}  className="hover:cursor-pointer hover:text-zinc-400">Notas</h3>
          <h3 onClick={() => location.replace("/reminder")} className="text-zinc-400 hover:cursor-pointer">Lembretes</h3>
          <h3 onClick={() => location.replace("/profile")} className="hover:cursor-pointer hover:text-zinc-400">Perfil</h3>
          </>
      )
    }
    return (
      <>
        <h3 onClick={() => location.replace("/notes")} >Notas</h3>
        <h3 onClick={() => location.replace("/reminder")}>Lembretes</h3>
        <h3 onClick={() => location.replace("/profile")} className="text-zinc-400">Perfil</h3>
    </>
    )
  
  }
  
  return (
    <div className="flex bg-neutral-800 w-full h-16 justify-center items-center font-bold text-zinc-200">
      <div className="w-full ml-20 flex justify-start">
            <h3 className="hover:cursor-pointer hover:text-zinc-400">Snout Notes</h3>
      </div>
      <div className="w-full mr-20 gap-10 flex justify-end">
        {getActualPage()}
      </div>
    </div>
  )
}