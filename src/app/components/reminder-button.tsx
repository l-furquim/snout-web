import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { SidebarMenuButton } from "@/components/ui/sidebar"
import type { LucideProps } from "lucide-react"
import { useState, type ForwardRefExoticComponent, type RefAttributes } from "react"
import type React from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

type buttonProps = {
  title: string,
  url: string,
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">> & RefAttributes<SVGSVGElement>
}

type objectButtonProps = {
  item: buttonProps
}

const ReminderButton: React.FC<objectButtonProps> = ({item}) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
   /*  <NavigationMenu className="bg-none w-full">
                            <NavigationMenuList>
                              <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-none justify-start flex">
                                  <a href={item.url} className="flex">
                                    <item.icon/>
                                    <span>{item.title}</span>
                                  </a>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                  <SidebarMenuButton>
                                    ALo
                                  </SidebarMenuButton>
                                </NavigationMenuContent>
                              </NavigationMenuItem>
                            </NavigationMenuList>
                          </NavigationMenu> */
                          <DropdownMenu  open={isOpen} onOpenChange={setIsOpen} >
                          <DropdownMenuTrigger className="border-none " asChild onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}> 
                            <a href={item.url} className="flex gap-2 justify-start self-start w-full font-bold">
                                    <item.icon/>
                                    <span>{item.title}</span>
                            </a>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                              <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Billing
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Settings
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Keyboard shortcuts
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                              </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                              <DropdownMenuItem>Team</DropdownMenuItem>
                              <DropdownMenuSub>
                                <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                  <DropdownMenuSubContent>
                                    <DropdownMenuItem>Email</DropdownMenuItem>
                                    <DropdownMenuItem>Message</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>More...</DropdownMenuItem>
                                  </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                              </DropdownMenuSub>
                              <DropdownMenuItem>
                                New Team
                                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                              </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>GitHub</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuItem disabled>API</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              Log out
                              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>


  ) 
}
export default ReminderButton;