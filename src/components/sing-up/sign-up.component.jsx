import React, { useState } from "react";
import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export default function SignUp() {
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = profile;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setProfile({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event =>{
    const {name, value} = event.target;

    setProfile(prev=>({
        ...prev,
        [name]:value
    }))
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sing up with yout email and password</span>
      <form
        action=" "
        className="sign-up-form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormInput
          type="text"
          name="displayName"
          value={profile.displayName}
          onChange={(e) => handleChange(e)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={profile.email}
          onChange={(e) => handleChange(e)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={profile.password}
          onChange={(e) => handleChange(e)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={profile.confirmPassword}
          onChange={(e) => handleChange(e)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SING UP</CustomButton>
      </form>
    </div>
  );
}
