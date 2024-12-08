"use client"

import NavBar from "../components/nav-bar";
import NotesPage from "./page";

export default function NotesLayout() {
  return (
        <div className="flex justify-center  flex-col items-center">
          <NavBar/>
          <NotesPage/>
        </div>
  );
}