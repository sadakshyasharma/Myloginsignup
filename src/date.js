import React, { Component } from "react";
import { DropdownDate, DropdownComponent } from "react-dropdown-date";
import "./App.css";

const formatDate = (date) => {
  // formats a JS date to 'yyyy-mm-dd'
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const Date=()=> { 
 


    return (
      <div className="dobs">
        <DropdownDate
          startDate={
            // optional, if not provided 1900-01-01 is startDate
            "1960-01-01" // 'yyyy-mm-dd' format only
          }
          endDate={
            // optional, if not provided current date is endDate
            "2023-02-06" // 'yyyy-mm-dd' format only
          }
          selectedDate={
            // optional
            "2012-01-01"
            // 'yyyy-mm-dd' format only
          }
          onDateChange={(date) => {
            // optional
            // console.log(date);
            // this.setState({ date: date, selectedDate: formatDate(date) });
          }}
          order={[
            DropdownComponent.day,
            DropdownComponent.month,
            DropdownComponent.year,
          ]}
        //   onDateChange={(newDate) =>
        //     setValues((prevValues) => ({ ...prevValues, dob: newDate }))
        //   }
          options={{
            yearReverse: true,
          }}
          defaultValues={{
            year: "Year",
            month: "Month",
            day: "Day",
          }}
        />
      </div>
    );
  }


export default Date;
