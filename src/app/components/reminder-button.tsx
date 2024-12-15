import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { ArrowDown, ArrowRight, Bell, Plus, Turtle} from "lucide-react"
import { useState} from "react"
import type React from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"


const ReminderButton = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [arrowClicked, setShowArrowClicked] = useState(false);

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
                showArrow ? <Plus className="hover:bg-neutral-700 rounded-xl p-1"/> : <></>
              }
              </div>
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                <Button onClick={() => location.replace("/reminder")} className="flex shadow-none items-center gap-2">
                <Turtle/> Anotacoes
                </Button>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      </>
  ) 
}
export default ReminderButton;