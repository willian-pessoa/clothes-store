import React, { useState } from "react";
import "./sign-in.styles.scss";

// db
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

// components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch(error){
      console.log(error);
    }
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
    <div className="sign-in">
      <h2>I already have Account</h2>
      <span>Sign In with your email and password</span>
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
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSingIn>
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}
