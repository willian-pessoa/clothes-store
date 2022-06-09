import React, { useState } from "react";
import "./sign-in.styles.scss";
import { connect } from "react-redux";

// db
import { googleSignStart, emailSignStart } from "../../redux/user/user.actions";

// components
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

function SignIn({googleSignStart, emailSignStart}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignStart(email, password)
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
          <CustomButton type="button" onClick={googleSignStart} isGoogleSingIn>
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignStart: () => dispatch(googleSignStart()),
  emailSignStart: (email, password) => dispatch(emailSignStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn)