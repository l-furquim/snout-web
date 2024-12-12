import { Calendar, Home, Bell, Search, Settings,SquareUserRound, User, CreditCard, Keyboard, Users, UserPlus, Mail, MessageSquare, PlusCircle, Plus} from "lucide-react"
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
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"




import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { ModeToggle } from "./toggle-mode"
import { usePathname } from "next/navigation"
import ReminderButton from "./reminder-button"



const items = [
  {
    title: "Notas",
    url: "/notes",
    icon: Home,
  },
  {
    title: "Lembretes",
    url: "/reminder",
    icon: Bell,
  },
  {
    title: "Calendario",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Pesquisar",
    url: "/search",
    icon: Search,
  },
  {
    title: "Configuração",
    url: "#",
    icon: Settings,
  },
  {
    title: "Perfil",
    url: "/profile",
    icon: SquareUserRound,
  },
]

export function AppSidebar() {
  const actualPage = usePathname();
      return (
        <Sidebar>
          <SidebarContent className="dark:bg-neutral-900 border-none">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xl text-neutral-800">Snout notes</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {items.map((item) => (
                    <SidebarMenuItem className={
                      actualPage === item.url ? "bg-neutral-800 hover:bg-neutral-900 text-zinc-200" : "hover:bg-neutral-800"
                    } key={item.title}>
                        {item.url === "/profile" ? 
                        <ContextMenu>
                            <ContextMenuTrigger className="">
                              <SidebarMenuButton asChild>
                                <a href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </a>
                              </SidebarMenuButton>
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
                          </ContextMenu>: 
                          <SidebarMenuButton asChild>
                             {

                             item.url === "/reminder" ? 
                            <ReminderButton item={item}/> :

                            <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                          
                            }
                        </SidebarMenuButton>}
                        {/* {item.url === "/reminder" ? 
                        : ""} */}
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                          <ModeToggle/>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )
}
