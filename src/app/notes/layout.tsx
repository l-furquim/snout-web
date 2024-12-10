"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import NavBar from "../components/nav-bar";
import NotesPage from "./page";
import { AppSidebar } from "../components/app-sidebar";
import type React from "react";

export default function NotesLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
        <div className="flex w-full h-full justify-start  flex-col items-start">
          <SidebarProvider>
            <AppSidebar />
            <main className="flex w-full h-full justify-center  flex-col items-center">
              <SidebarTrigger/>
              {children}
            </main>
          </SidebarProvider>
        </div>
  );
}