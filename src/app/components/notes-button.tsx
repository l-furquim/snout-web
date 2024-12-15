'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem } from "@/components/ui/sidebar"
import { ArrowDown, ArrowRight, NotebookTabs, Plus, Turtle } from "lucide-react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Button } from "@/components/ui/button";
import { useState } from "react";



const NotesButton = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [arrowClicked, setShowArrowClicked] = useState(false);

  return (
    <>
     <ContextMenu>
        <ContextMenuTrigger className="">
        <Collapsible className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton   onClick={() => setShowArrowClicked(!arrowClicked)} onMouseEnter={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
              {
                !showArrow ? <NotebookTabs/> : arrowClicked ? 
                
                <ArrowDown  className="hover:bg-neutral-700 rounded-md"/> : <ArrowRight size={20} className="hover:bg-neutral-700 rounded-md"/>
              } 
              Notas
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
                <Button onClick={() => location.replace("/notes")} className="flex shadow-none items-center gap-2">
                <Turtle/> Anotacoes
                </Button>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-64">
          <ContextMenuItem inset>
            Voltar
            <ContextMenuShortcut>⌘</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuCheckboxItem onClick={() => location.replace("/notes/fav")}>
            Mostrar notas favoritas
            <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
          </ContextMenuCheckboxItem>
          <ContextMenuItem inset>
            Sair
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
          <ContextMenuSeparator />
          <ContextMenuRadioGroup value="pedro">
            <ContextMenuLabel inset>People</ContextMenuLabel>
            <ContextMenuSeparator />
            <ContextMenuRadioItem value="pedro">
              Pedro Duarte
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuContent>
      </ContextMenu>
        
      </>
  )
}
export default NotesButton;