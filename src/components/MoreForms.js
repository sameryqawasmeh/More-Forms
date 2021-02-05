import React, { useState } from 'react';


const MoreForms = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First Name must be at least 2 characters.");
        } else if (e.target.value.length >= 2)
            setFirstNameError("");
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last Name must be at least 2 characters.");
        } else if (e.target.value.length >= 2)
            setLastNameError("");
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else if (e.target.value.length >= 3)
            setEmailError("");
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Email must be 8 characters or longer!");
        } else if (e.target.value.length >= 8)
            setPasswordError("");
    }
    const handlePasswordConfirmation = (e) => {
        setPasswordConfirmation(e.target.value);
        if (String(e.target.value) !== String(password)) {
            setPasswordConfirmationError("Password should match !");
        } else if (String(e.target.value) === String(password)) {
            setPasswordConfirmationError("");
        }
    }

    return (
        <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name :</label>
          <input type="text" onChange={handleFirstName} name="firstName"/>
          {firstNameError ?
            <p style={{ color: "red" }}>{firstNameError}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name :</label>
          <input type="text" onChange={handleLastName} name="lastName" />
          {lastNameError ? <p style={{ color: "red" }}>{lastNameError}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="text" onChange={handleEmail} name="email" />
          {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input type="password" onChange={handlePassword} name="password" />
          {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password :</label>
          <input type="password" onChange={handlePasswordConfirmation} name="confirmPassword" />
          {passwordConfirmationError ? <p style={{ color: "red" }}>{passwordConfirmationError}</p> : "" }
        </div>
      </form>
    );
}
export default MoreForms;