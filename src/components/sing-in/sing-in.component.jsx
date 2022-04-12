import React, { useState } from "react";

import "./sing-in.styles.scss"

// components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    let name = event.target.name;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sing-in">
      <h2>I already have Account</h2>
      <span>Sing In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
}
