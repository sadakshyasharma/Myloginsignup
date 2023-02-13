import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Dcard = ({ item }) => {
  return (
    <section className="apiboxdoctor">
      <div>
        <img className="icondoctor" src="images.jpg" />
      </div>

      <div className="docname">
        {"Dr. " + item.firstName + " " + item.lastName}
      </div>

      <div className="docdetails">
        {item.profile.qualifications.map((qual) => (
          <p>{qual.name} |</p>
        ))}
      </div>
      <p className="doctext">Hospital </p>
      <div className="docdetails">{item.profile.experience[0].place}</div>
      <p className="doctext">Languages</p>
      {item.profile.languages.map((lang) => (
        <div className="docdetails">{lang}</div>
      ))}
      <div>
        <button className="dbtn" type="submit">
          BOOK Appointment
        </button>
      </div>
    </section>
  );
};

export default Dcard;
