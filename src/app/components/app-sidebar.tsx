import { Calendar, Home, Search, Settings,SquareUserRound} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import ReminderButton from "./reminder-button"
import NotesButton from "./notes-button"
import ProfileButton from "./profile-button"



const items = [
  {
    title: "Notas",
    url: "/notes",
    icon: Home,
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
              <SidebarGroupLabel className="text-xl dark:text-zinc-200 mb-5 text-neutral-800">Snout notes</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                <ReminderButton/>
                <NotesButton/>
                 <ProfileButton/>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      )
}
