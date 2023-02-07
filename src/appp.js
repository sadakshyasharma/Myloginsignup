import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Doctor from "./component/Doctor";
import Dashboard from "./component/Dashboard";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "dashboard" && <Dashboard />}
      {currentPage === "login" && <Login setUser={setUser} />}
      {currentPage === "signup" && <Signup />}
      {currentPage === "doctor" && <Doctor />}
    </>
  );
}

export default App;
