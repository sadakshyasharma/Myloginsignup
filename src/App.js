import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';
import Doctor from './component/doctor';
import "./App.css"
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element="Dashboard" />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
        {/* <Link to="/">Back Home</Link> */}
      </Router>
    </>
  );
}

export default App;
