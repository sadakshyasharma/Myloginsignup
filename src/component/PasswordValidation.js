import React from 'react'

export default function passwordValidation(password) {
    function checkEmpty(field) {
      return !/(.|\s)*\S(.|\s)*/.test(field);
    }
  if (checkEmpty(password)) {
    return "Must not be empty";
  } else if (!/[A-Z]/.test(password)) {
    return "Must contain uppercase letter.";
  } else if (!/[a-z]/.test(password)) {
    return "Must contain lowercase letter.";
  } else if (!/[0-9]/.test(password)) {
    return "Must contain at least one number";
  } else if (!/^.{6,}$/.test(password)) {
    return "Must contain at least 6 characters.";
  } else if (
    !/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/.test(password)
  ) {
    return "Must contain at least one special character.";
  } else {
    return "";
    }
    
    
}
  