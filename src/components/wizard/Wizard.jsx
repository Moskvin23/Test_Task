import React, { useContext } from "react"
import RoleSelection from "../roleSelection/RoleSelection"
import Role from "../role/Role"
import GuideFlow from "../guideFlow/GuideFlow"
import TermsAndConditions from "../termsAndConditions/TermsAndConditions"
import { RoleContext } from "../../context/RoleContext"
import { ROLE_STEPS } from "../../enums"
import styles from "./Wizard.module.scss"

const Wizard = () => {
  const { currentStep } = useContext(RoleContext)

  const getContent = () => {
    if (currentStep === ROLE_STEPS.SELECTION) {
      return <RoleSelection />
    } else if (currentStep === ROLE_STEPS.CABINET) {
      return (
        <>
          <Role />
        </>
      )
    } else if (currentStep === ROLE_STEPS.TERMS_AND_CONDITIONS) {
      return <TermsAndConditions />
    }
  }

  return (
    <>
      <div className={styles.modal}>{getContent()}</div>
      {currentStep === ROLE_STEPS.CABINET && <GuideFlow />}
    </>
  )
}

export default Wizard
