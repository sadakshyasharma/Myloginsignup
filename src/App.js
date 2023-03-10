import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import { useState } from "react";
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import Doctor from './component/doctor';

import SpecialityCard from './component/SpecialityCard';
import "./App.css"
import Dashboard from './component/dashboard';
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/specialities" element={<SpecialityCard />} />
          <Route path="/ddashboard" element="Doctor Dashboard" />
          <Route path="/pdashboard" element="Patient Dashboard" />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
