import React, { useContext } from "react"
import { RoleContext } from "../../context/RoleContext"
import { BUTTON_TYPES, ROLE_STEPS, USER_ROLE } from "../../enums"
import styles from "./RoleSelection.module.scss"
import Button from "../buttons/Button/Button"
import { ReactComponent as Borrower } from "../../assets/icons/borrower.svg"
import { ReactComponent as Lender } from "../../assets/icons/lender.svg"

const RoleSelection = () => {
  const { setSelectedRole, setCurrentStep } = useContext(RoleContext)

  const handleRoleSelection = (role) => {
    setSelectedRole(role)
    setCurrentStep(ROLE_STEPS.CABINET)
  }
  return (
    <>
      <h1 className={styles.title}>Choose your role</h1>
      <h2 className={styles.subtitle}>Please, choose your role in the service.</h2>

      <div className={styles.actions}>
        <Button
          icon={Borrower}
          label={"The Borrower"}
          type={BUTTON_TYPES.PRIMARY}
          onClick={() => handleRoleSelection(USER_ROLE.BORROWER)}
        />
        <Button
          icon={Lender}
          label={"The Lender"}
          type={BUTTON_TYPES.PRIMARY}
          onClick={() => handleRoleSelection(USER_ROLE.LENDER)}
        />
      </div>
    </>
  )
}

export default RoleSelection
