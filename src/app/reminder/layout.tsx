"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NavBar from "../components/nav-bar";
import ReminderPage from "./page";
import { AppSidebar } from "../components/app-sidebar";

export default function ReminderLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <div className="flex justify-center  flex-col items-center">
      <SidebarProvider>
            <AppSidebar />
            <main className="flex w-full h-full justify-center  flex-col items-center">
              <SidebarTrigger/>
              {children}
            </main>
          </SidebarProvider>
    </div>
  )
}