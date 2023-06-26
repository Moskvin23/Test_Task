import React from "react"
import styles from "./HomePage.module.scss"
import Header from "../../components/header/Header"
import Wizard from "../../components/wizard/Wizard"

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <Wizard />
      </div>
    </>
  )
}

export default HomePage
