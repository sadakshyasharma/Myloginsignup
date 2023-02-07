import axios from "axios";
import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import { Router } from "react-router-dom";
// import BasicTabs from "../BasicTabs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";





const Login = ({setUser}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return;

    console.log(email, password);
    try {
      const res = await axios.post(
        "http://my-doctors.net:8090/authentication",
        {
          email: email,
          password: password,
          strategy: "local",
        }
      );
      setSuccess(true);
      if (res.data.user.role === "patient") { navigate("/pdashboard"); }
      else {
        navigate("/ddashboard");
      }
    } catch (error) {}
  };

  return (
    <Paper>
      <Grid container>
        <Grid item xs={6}>
          <div>
            <img src="login.svg" />
          </div>
        </Grid>

        <Grid item xs={6}>
          {/* <Router>
            <Navbar />
          </Router> */}
          <Navbar currentTab={0}/>
          <div className="sectionlogin">
            <form onSubmit={handleSubmit}>
              <div className="loginbox">
                <TextField
                  label="Email or Mobile Number*"
                  type="email"
                  name="email"
                  value={email}
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="loginbox">
                <TextField
                  label="Password*"
                  type="password"
                  name="password"
                  value={password}
                  fullWidth
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button className="loginbtn" type="submit">
                  Login
                </button>
              </div>

              <div className="signupnavigate">
                Don't have an account?{" "}
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <b>Sign Up</b>
                </Link>
              </div>

              {success && (
                <span>
                  <h3>Login successfully.</h3>
                </span>
              )}
            </form>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Login;
