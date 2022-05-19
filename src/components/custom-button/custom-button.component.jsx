import React from 'react'

import "./custom-button.styles.scss"

export default function CustomButton({children, isGoogleSingIn, inverted, ...otherProps}) {
  return (
    <button className={`${inverted && "inverted"} ${isGoogleSingIn && "google-sing-in"} custom-button`}{...otherProps}>
        {children}
    </button>
  )
}
