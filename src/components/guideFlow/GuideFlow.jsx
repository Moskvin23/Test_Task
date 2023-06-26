import React, { useContext } from "react"
import styles from "./GuideFlow.module.scss"
import { ReactComponent as GuideIcon } from "../../assets/icons/guide.svg"
import Button from "../buttons/Button/Button"
import { BUTTON_TYPES, ROLE_STEPS } from "../../enums"
import { RoleContext } from "../../context/RoleContext"
const GuideFlow = () => {
  const { setCurrentStep } = useContext(RoleContext)

  const handleRoleSelection = () => {
    setCurrentStep(ROLE_STEPS.TERMS_AND_CONDITIONS)
  }
  return (
    <div className={styles.modal}>
      <Button
        icon={GuideIcon}
        label="Guide Flow"
        type={BUTTON_TYPES.DEFAULT2}
        onClick={() => {
          handleRoleSelection()
        }}
      />
      <h2 className={styles.subtitle}>
        Study the guide flow for the convenience of using the service.
      </h2>
    </div>
  )
}

export default GuideFlow
