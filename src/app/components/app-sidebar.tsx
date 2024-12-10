import { Calendar, Home, Bell, Search, Settings,SquareUserRound } from "lucide-react"

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
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Barra lateral</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className={
                  actualPage === item.url ? "bg-neutral-800 text-zinc-200" : ""
                } key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
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
