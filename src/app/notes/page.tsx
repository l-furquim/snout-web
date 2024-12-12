"use client"

import NewNote from "../components/new-note"
import Notes from "../components/notes"


export default function NotesPage(){  
  return (
    <div className="flex flex-col justify-center items-center gap-20">
        <NewNote/>
{/*         <Notes/> */}
    </div>
  )
}