import styles from "./App.module.scss"
import HomePage from "./pages/HomePage/HomePage"
import { RoleProvider } from "./context/RoleContext"
import { splitWorkingHours } from "./doctorSchedule.js"
import { useEffect } from "react"

const schedule = {
  start: "10:00",
  appointments: [
    {
      start: "10:45",
      duration: 45,
    },
    {
      start: "13:50",
      duration: 20,
    },
  ],
  end: "15:00",
}
function App() {
  useEffect(() => {
    const splitWorkingHours = require("./doctorSchedule").splitWorkingHours
    const timeSlots = splitWorkingHours(schedule)
    console.log(timeSlots)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <RoleProvider>
          <HomePage />
        </RoleProvider>
      </div>
    </>
  )
}

export default App
