"use client"
import ProfilePage from "./page";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "../components/app-sidebar"

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </div>
  )
}