import React from "react";
import { useState } from "react";
import axios from "axios";
import passwordValidation from "./PasswordValidation";
import { TextField } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "male",
    mobile: "",
    dob: "2011-01-01",
    email: "",
    createpassword: "",
    confirmpassword: "",
  });
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
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
    await axios
      .get(`http://my-doctors.net:8090/accounts?email=${formData.email}`)
      .catch((error) => setEmailError("Email already exists"));
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
      .catch((error) => setMobileError("Mobile number already exists"));
  };

  const checkPassword = () => {
    setPasswordError(false);
    setPasswordError(passwordValidation(formData.createpassword));
  };

  const checkConfirmPassword = () => {
    setConfirmPasswordError(false);
    if (checkEmpty(formData.confirmpassword)) {
      setConfirmPasswordError("Confirm password cannot be empty!");
    } else if (formData.createpassword !== formData.confirmpassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

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
      const res = await axios.post("http://my-doctors.net:8090/doctors", {
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
    } catch (error) {}
  };

  return (
    <Paper>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <img src="signup.svg" />
          </div>
        </Grid>

        <Grid item xs={6}>
          <Navbar currentTab={2} />
          <div className="sectionsignup">
            <h2>Create an account</h2>

            <form onSubmit={handleSubmit}>
              <div className="signupbox">
                <div>
                  <label>Name*</label>
                </div>
                <TextField
                  placeholder="Enter name"
                  required
                  type="text"
                  inputProps={{ maxLength: 50 }}
                  name="fullName"
                  fullWidth
                  value={formData.fullName}
                  onChange={handleChange}
                  variant="outlined"
                  onBlur={() => checkFullName()}
                />
                {nameError && <span style={{ color: "red" }}>{nameError}</span>}
              </div>

              <div className="signupbox">
                <div>
                  <label>Gender*</label>
                </div>
                <div>
                  <input
                    className="radiobtn"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                  />
                  <span className="radiobtntext"> Male </span>
                  <input
                    className="radiobtn"
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />
                  <span className="radiobtntext"> Female </span>
                  <input
                    className="radiobtn"
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === "other"}
                    onChange={handleChange}
                  />
                  <span className="radiobtntext"> Other </span>
                </div>
              </div>

              <div className="signupbox">
                <div>
                  <label>Mobile Number*</label>
                </div>
                <TextField
                  placeholder="Enter mobile number"
                  required
                  type="text"
                  inputProps={{ maxLength: 10 }}
                  name="mobile"
                  fullWidth
                  value={formData.mobile}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={() => checkMobile()}
                />
                {mobileError && (
                  <span style={{ color: "red" }}>{mobileError}</span>
                )}
              </div>

              <div className="signupbox">
                <div>
                  <label>Email*</label>
                </div>
                <TextField
                  placeholder="abc@gmail.com"
                  required
                  type="email"
                  name="email"
                  fullWidth
                  value={formData.email}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={() => checkEmail()}
                />
                {emailError && (
                  <span style={{ color: "red" }}>{emailError}</span>
                )}
              </div>

              <div className="signupbox">
                <div>
                  <label>Create Password*</label>
                </div>
                <TextField
                  placeholder="Create password"
                  type="password"
                  name="createpassword"
                  value={formData.createpassword}
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={() => checkPassword()}
                />
                {passwordError && (
                  <span style={{ color: "red" }}>{passwordError}</span>
                )}
              </div>

              <div className="signupbox">
                <div>
                  <label>Confirm Password*</label>
                </div>
                <TextField
                  placeholder="Confirm password"
                  type="password"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  fullWidth
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={() => checkConfirmPassword()}
                />
                {confirmpasswordError && (
                  <span style={{ color: "red" }}>{confirmpasswordError}</span>
                )}
              </div>

              <button className="signupbtn" type="submit">
                Register
              </button>
              <div className="signupnavigate">
                Already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <b> Sign in</b>
                </Link>
              </div>
              {success && (
                <span>
                  <h3>Signed up successfully!</h3>
                </span>
              )}
            </form>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
