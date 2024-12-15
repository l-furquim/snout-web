import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { ArrowDown, ArrowRight, Bell, Plus, Turtle} from "lucide-react"
import { useEffect, useState} from "react"
import type React from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type NotesType = {
  id: number,
  title: string,
  content: string,
  author: number,
  status: string
}


const ReminderButton = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [arrowClicked, setShowArrowClicked] = useState(false);
  const [reminders, setReminders] = useState<NotesType[]>([]);

  useEffect(() => {
    setReminders([{
      id: 1,
      title: "Alo",
      content: "Alo no content",
      author: 10,
      status: "pendente"
    },
    {
      id: 1,
      title: "Alo2",
      content: "Alo no content",
      author: 10,
      status: "pendente"
    }]);
  }, []);
  function newReminder () {
    const container = document.getElementById("remindersContainer");

    if(container){
      container.innerHTML += 
      <SidebarMenuSubItem>
        <Button onClick={() => location.replace("/reminder")} className="flex shadow-none items-center gap-2">
         <Input autoFocus/>
        </Button>
      </SidebarMenuSubItem>
    }
  }

  return (
      <>
        <Collapsible className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton onClick={() => setShowArrowClicked(!arrowClicked)}  onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
                {
                  !showArrow ? <Bell/> : 
                  arrowClicked ? 
                  <ArrowDown className="hover:bg-neutral-700 rounded-md"/> : 
                  <ArrowRight size={20} className="hover:bg-neutral-700 rounded-md"/>
                
                }
                Lembretes
                
                
                <div className="flex w-full justify-end items-center">
                {
                  showArrow ? <Plus className="hover:bg-neutral-700 rounded-xl p-1" onClick={() => newReminder()}/> : <></>
                }
                </div>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub  id="remindersContainer">
                  {reminders.map((reminder) => (
                    // <li key={reminder.id}>
                      <SidebarMenuSubItem className="hover:bg-sidebar-accent">
                        <Button onClick={() => location.replace("/reminder")} className="flex shadow-none items-center gap-2">
                        <Turtle/> {reminder.title}
                        </Button>
                      </SidebarMenuSubItem>
                    // </li>
                  ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </>
  ) 
}
export default ReminderButton;