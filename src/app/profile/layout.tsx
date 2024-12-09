"use client"

import NavBar from "../components/nav-bar";
import ProfilePage from "./page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ProfilePage/>
      <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </div>
  )
}