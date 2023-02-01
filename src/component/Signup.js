
import React from "react";
import { useState } from "react";
import axios from 'axios'
import passwordValidation  from "./PasswordValidation";

export default function Signup ()  {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "male",
    mobile: "",
    dob: "2011-01-01",
    email: "",
    createpassword: "",
    confirmpassword: "",
  });
  const [success,setSuccess] = useState(false)
const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false)
  const [mobileError, setMobileError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmpasswordError, setConfirmPasswordError] = useState(false);


 const checkFullName = () => {
   setNameError(false);
   if (checkEmpty(formData.fullName)) {
     setNameError("Please enter a valid name!");
   }
  };
  function checkEmpty(field) {
    return !/(.|\s)*\S(.|\s)*/.test(field);
  }


  const checkEmail = async () => {
    setEmailError(false);
    if (checkEmpty(formData.email)) {
      setEmailError("Please enter a valid email!");
    }
    await axios.get(`http://my-doctors.net:8090/accounts?email=${formData.email}`).catch(error => setEmailError("Email already exists"))
  };


  
   const checkMobile = async () => {
     setMobileError(false);
     if (checkEmpty(formData.mobile)) {
       setMobileError("Please enter a valid 10-digit mobile number!");
     }
     await axios
       .get(
         `http://my-doctors.net:8090/accounts?contactNumber=${formData.mobile}`
       )
       .catch((error) =>
         setMobileError("Mobile number already exists")
       );
   };

const checkPassword = () => {
  setPasswordError(false);
  setPasswordError(passwordValidation(formData.createpassword));
};

  const checkConfirmPassword = () => {
    setConfirmPasswordError(false);
     if (checkEmpty(formData.confirmpassword)) {
       setConfirmPasswordError("Confirm password cannot be empty!");
    }
   else if (formData.createpassword !== formData.confirmpassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }

 }
  
 
  
  passwordValidation();

  const handleChange = (e) => {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

   
  
  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(formData);  
  try {
    const res = await axios.post("http://my-doctors.net:8090/patients", {
      firstName: formData.fullName,
      gender: formData.gender,
      profile: {
        dob: formData.dob,
      },
      email: formData.email,
      password: formData.createpassword,
      contactNumber: formData.mobile,
    });
    setSuccess(true);
  } catch (error) {
    
  }
};


    return (
      <section className="section">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <label> Name </label>
          <div className="signupbox">
            <input
              placeholder="Enter name"
              required
              type="text"
              maxLength="50"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => checkFullName()}
            />
            {nameError && <span style={{ color: "red" }}>{nameError}</span>}
          </div>
          <label>Gender</label>
          <div className="signupbox">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
            <input
              type="radio"
              name="gender"
              value="other"
              checked={formData.gender === "other"}
              onChange={handleChange}
            />{" "}
            Other
          </div>
          <label>Mobile Number</label>
          <div className="signupbox">
            <input
              placeholder="Enter mobile number"
              required
              type="text"
              maxLength="10"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              onBlur={() => checkMobile()}
            />
            {mobileError && <span style={{ color: "red" }}>{mobileError}</span>}
          </div>
          <label>Date of Birth</label>
          <div className="signupbox">
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <label>Email</label>
          <div className="signupbox">
            <input
              placeholder="abc@gmail.com"
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => checkEmail()}
            />
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
          </div>

          <label>Create Password</label>
          <div className="signupbox">
            <input
              placeholder="Create password"
              type="password"
              name="createpassword"
              value={formData.createpassword}
              onChange={handleChange}
              onBlur={() => checkPassword()}
            />
            {passwordError && (
              <span style={{ color: "red" }}>{passwordError}</span>
            )}
          </div>

          <label>Confirm Password</label>
          <div className="signupbox">
            <input
              placeholder="Confirm password"
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              onBlur={() => checkConfirmPassword()}
            />
            {confirmpasswordError && (
              <span style={{ color: "red" }}>{confirmpasswordError}</span>
            )}
          </div>

          <button type="submit">Sign up</button>
          <hr />
          {success && (
            <span>
              <h3>Patient's account created successfully.</h3>
            </span>
          )}
        </form>
      </section>
    );
  };


