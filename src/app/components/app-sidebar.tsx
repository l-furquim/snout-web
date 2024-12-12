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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


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
                             {item.url === "/reminder" ? 
                            <NavigationMenu>
                            <NavigationMenuList>
                              <NavigationMenuItem>
                                <NavigationMenuTrigger className="">
                                <a href={item.url}>
                                  <item.icon />
                                  <span>{item.title}</span>
                                </a>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                      <NavigationMenuLink asChild>
                                        <a
                                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                          href="/"
                                        >
                                         
                                          <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                          </div>
                                          <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components that you can copy and
                                            paste into your apps. Accessible. Customizable. Open
                                            Source.
                                          </p>
                                        </a>
                                      </NavigationMenuLink>
                                    </li>
                                  </ul>
                                </NavigationMenuContent>
                              </NavigationMenuItem>
                            </NavigationMenuList>
                          </NavigationMenu> :
                          <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>}
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
