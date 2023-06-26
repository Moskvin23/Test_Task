import React, { useContext, useEffect, useRef, useState } from "react"
import styles from "./TermsAndConditions.module.scss"
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg"
import Button from "../buttons/Button/Button"
import { RoleContext } from "../../context/RoleContext"
import { BUTTON_TYPES, ROLE_STEPS } from "../../enums"
import { ReactComponent as CheckMark } from "../../assets/icons/checkmark.svg"

const TermsAndConditions = () => {
  const { setCurrentStep } = useContext(RoleContext)
  const [items, setItems] = useState([])
  const [buttonType, setButtonType] = useState(BUTTON_TYPES.DISABLED)
  const scrollContainerRef = useRef(null)

  const backToTheFirstStep = () => {
    setCurrentStep(ROLE_STEPS.SELECTION)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://60c74df306f3160017d29000.mockapi.io/api/v1/tossource")
        const data = await response.json()
        setItems(data[0].text)
      } catch (error) {
        console.log("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
      const scrollThreshold = 50

      if (scrollHeight - scrollTop <= clientHeight + scrollThreshold) {
        setButtonType(BUTTON_TYPES.PRIMARY)
      } else {
        setButtonType(BUTTON_TYPES.DISABLED)
      }
    }

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <>
      <div className={styles.closeIcon}>
        <CloseIcon onClick={() => backToTheFirstStep()} />
      </div>

      <h1 className={styles.title}>Terms & Conditions</h1>
      <h2 className={styles.subtitle}>
        You should be obliged to apply the Terms & Conditions to use the service.
      </h2>

      <div className={styles.content} ref={scrollContainerRef}>
        <div className={styles.gradient} />
        <div dangerouslySetInnerHTML={{ __html: items }} />
      </div>

      <div>
        <Button
          disabled={buttonType === BUTTON_TYPES.DISABLED}
          type={buttonType}
          icon={CheckMark}
          label="I Agree"
          onClick={() => backToTheFirstStep()}
        />
      </div>
    </>
  )
}

export default TermsAndConditions
