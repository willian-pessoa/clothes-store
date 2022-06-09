import React from 'react'
import "./sign-in-and-sign-up.styles.scss"

import SignIn from '../../components/sing-in/sign-in.component'
import SignUp from "../../components/sing-up/sign-up.component"

export default function SignInAndSignUp() {
  return (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
  )
}
