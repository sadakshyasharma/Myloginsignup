import { useState, useEffect } from "react";

export const usePasswordRules = ({
  firstPassword = "",
  secondPassword = "",
  requiredLength = 6,
}) => {
  const [validLength, setValidLength] = useState(null);
  const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  const [matched, setMatchChar] = useState(null);

  useEffect(() => {
    setValidLength(firstPassword.length >= requiredLength);
    setUpperCase(firstPassword.toLowerCase() !== firstPassword);
    setLowerCase(firstPassword.toUpperCase() !== firstPassword);
    setHasNumber(/\d/.test(firstPassword));
    setMatchChar(firstPassword && firstPassword === secondPassword);
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
  }, [firstPassword, secondPassword, requiredLength]);

  return [validLength, hasNumber, upperCase, lowerCase, matched, specialChar];
};
export default {
  usePasswordRules,
};
