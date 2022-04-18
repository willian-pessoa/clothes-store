import React from 'react'

import "./custom-button.styles.scss"

export default function CustomButton({children, isGoogleSingIn, ...otherProps}) {
  return (
    <button className={`${isGoogleSingIn && "google-sing-in"} custom-button`}{...otherProps}>
        {children}
    </button>
  )
}
