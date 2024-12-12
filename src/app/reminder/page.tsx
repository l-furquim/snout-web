import NewNote from "../components/new-note";
import Reminders from "../components/reminders";

export default function ReminderPage() {
  return (
    <div className="flex flex-col gap-20 justify-center items-center">
      <NewNote/>
      {/* <Reminders/> */}
    </div>
  )
}