import styles from "./App.module.scss"
import HomePage from "./pages/HomePage/HomePage"
import { RoleProvider } from "./context/RoleContext"

function App() {
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
