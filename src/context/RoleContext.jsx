import React, { createContext, useState } from "react"
import { ROLE_STEPS } from "../enums"
import { USER_ROLE } from "../enums"

const RoleContext = createContext()

const RoleProvider = ({ children }) => {
  const [selectedRole, setSelectedRole] = useState()
  const [currentStep, setCurrentStep] = useState(ROLE_STEPS.SELECTION)

  return (
    <RoleContext.Provider
      value={{ selectedRole, setSelectedRole, currentStep, setCurrentStep, USER_ROLE }}>
      {children}
    </RoleContext.Provider>
  )
}

export { RoleContext, RoleProvider }
