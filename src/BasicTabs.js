import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { BrowserRouter as Router ,Routes} from "react-router-dom";

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
      <Routes>
        <Tabs
          value={value}
          onChange={handleChange}
          // aria-label="basic tabs example"
        >
          <Tab label="Login" component={Link} to="/login" />
          <Tab label="Patient Sign up" component={Link} to="/signup" />
          <Tab label="Doctor Sign up" component={Link} to="/doctor" />
        </Tabs>
      </Routes>
    </Router>
  );
}
//style={{ textDecoration: "none" }}
