import React, { useContext, useState } from "react"
import styles from "./Header.module.scss"
import { RiArrowDropDownLine } from "react-icons/ri"
import { ReactComponent as Logo } from "../../assets/icons/logo.svg"
import { ReactComponent as LockIcon } from "../../assets/icons/lock.svg"
import { ReactComponent as SignUpIcon } from "../../assets/icons/signup.svg"
import { BUTTON_TYPES, ROLE_STEPS } from "../../enums"
import { RxHamburgerMenu } from "react-icons/rx"
import Button from "../buttons/Button/Button"
import { RoleContext } from "../../context/RoleContext"

const Header = () => {
  const { setCurrentStep } = useContext(RoleContext)
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleRoleSelection = () => {
    setCurrentStep(ROLE_STEPS.TERMS_AND_CONDITIONS)
  }
  const handleItemClick = () => {
    if (isMenuOpen) {
      toggleMenu()
    }
  }
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }
  const navItems = [
    { id: 1, title: "Expertise" },
    { id: 2, title: "Industries" },
    { id: 3, title: "News" },
    { id: 4, title: "Partners" },
    { id: 5, title: "Careers" },
    { id: 6, title: "About Us" },
  ]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSectionOfHeader}>
          <a href="/#">
            <Logo className={styles.logo} />
          </a>
        </div>
        <div className={`${styles.middleSectionOfHeader} ${isMenuOpen ? styles.active : ""}`}>
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`${styles.dropdown} ${isMenuOpen ? styles.active : ""}`}
              onClick={handleItemClick}>
              {item.title === "About Us" ? (
                <div className={styles.dropdownToggle}>
                  {item.title}
                  <RiArrowDropDownLine className={styles.dropdownIcon} size={25} />
                </div>
              ) : (
                <a href="/#">{item.title}</a>
              )}
            </div>
          ))}
        </div>
        <div className={styles.rightSectionOFHeader}>
          <Button
            icon={LockIcon}
            label="Sign In"
            type={BUTTON_TYPES.SECONDARY}
            onClick={() => {
              handleRoleSelection()
            }}
          />
          <Button
            icon={SignUpIcon}
            label="Sign Up"
            type={BUTTON_TYPES.PRIMARY}
            onClick={() => {
              handleRoleSelection()
            }}
          />
        </div>
        <RxHamburgerMenu
          size={20}
          className={`${styles.hamburgerIcon} ${isMenuOpen ? styles.active : ""}`}
          onClick={toggleMenu}
        />
      </div>
    </>
  )
}

export default Header
