import React, { useContext } from "react"
import styles from "./Role.module.scss"
import { RoleContext } from "../../context/RoleContext"
import Button from "../buttons/Button/Button"
import { BUTTON_TYPES, ROLE_STEPS } from "../../enums"
import { ReactComponent as Borrower } from "../../assets/icons/borrower.svg"
import { ReactComponent as Close } from "../../assets/icons/close.svg"

const Role = () => {
  const { selectedRole, setCurrentStep } = useContext(RoleContext)

  const handleRoleSelection = () => {
    setCurrentStep(ROLE_STEPS.TERMS_AND_CONDITIONS)
  }
  const backToTheFirstStep = () => {
    setCurrentStep(ROLE_STEPS.SELECTION)
  }
  return (
    <>
      <h1 className={styles.title}>{selectedRole}</h1>
      <h2 className={styles.subtitle}>
        You have chosen the role - <span className={styles.span}>{selectedRole}</span>
      </h2>
      <div className={styles.actions}>
        <Button
          icon={Borrower}
          label={"Go To Cabinet"}
          type={BUTTON_TYPES.PRIMARY}
          onClick={() => handleRoleSelection()}
        />
        <Button
          icon={Close}
          label={"Cancel"}
          type={BUTTON_TYPES.ERROR}
          onClick={() => backToTheFirstStep()}
        />
      </div>
    </>
  )
}

export default Role
