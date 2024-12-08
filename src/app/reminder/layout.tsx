"use client"

import NavBar from "../components/nav-bar";
import ReminderPage from "./page";

export default function ReminderLayout() {
  return (
    <div className="flex justify-center  flex-col items-center">
      <NavBar/>
      <ReminderPage/>
    </div>
  )
}