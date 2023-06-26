import React from "react"
import styles from "./Button.module.scss"
import { BUTTON_TYPES } from "../../../enums"
import classNames from "classnames"

const Button = ({ onClick, type, label, disabled, icon: Icon }) => {
  const getButtonTypeClass = (type) => {
    switch (type) {
      case BUTTON_TYPES.DEFAULT:
        return styles.button_default
      case BUTTON_TYPES.SECONDARY:
        return styles.button_secondary
      case BUTTON_TYPES.PRIMARY:
        return styles.button_primary
      case BUTTON_TYPES.DEFAULT2:
        return styles.button_default2
      case BUTTON_TYPES.ERROR:
        return styles.button_error
      case BUTTON_TYPES.DISABLED:
        return styles.button_disabled
      default:
        return styles.button_default
    }
  }

  const buttonTypeClass = getButtonTypeClass(type)

  return (
    <button
      disabled={disabled}
      className={classNames(styles.button, buttonTypeClass)}
      onClick={onClick}>
      {Icon && <Icon className={styles.icon} />}
      <div className={styles.text}>{label}</div>
    </button>
  )
}

export default Button
