"use client";

import React, { useState } from "react";
import { GlobalStyles, HeadingStyle } from "./GlobalStyles";
import Input from "./components/Input";
import Generate from "./components/Generate";
import { upperCaseLetters, lowerCaseLetters, special, numbers } from "./data";


export type FormValues = {
  isUppercase: boolean;
  isLowercase: boolean;
  isNumber: boolean;
  isSymbol: boolean;
  range: number;
  password: string;
};

function App() {
  const [formData, setFormData] = useState<FormValues>({
    isUppercase: false,
    isLowercase: false,
    isNumber: false,
    isSymbol: false,
    range: 4,
    password: "",
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //console.log(e.target);
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "range") {
      setFormData({ ...formData, [name]: parseInt(value, 10) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  //console.log("formdata", formData)

  const getRandomPassword = () => {
    let chars = [];

    if (formData?.isUppercase) {
      chars.push(
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
    }
    if (formData?.isLowercase) {
      chars.push(
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
      );
    }
    if (formData?.isNumber) {
      chars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (formData?.isSymbol) {
      chars.push(special[Math.floor(Math.random() * special.length)]);
    }
    if (chars.length === 0) return;

    return chars[Math.floor(Math.random() * chars.length)];
  };

  const generatePassword = () => {
    let _password = "";
    for (let i = 0; i < formData.range; i++) {
      _password += getRandomPassword();
    }
    setFormData({ ...formData, password: _password });
  };
  
  return (
    <div>
      <GlobalStyles />
      <HeadingStyle>Password Generator</HeadingStyle>
      <Input formData={formData} handleFormChange={handleFormChange} />
      <br />
      <Generate
        formData={formData}
        handleFormChange={handleFormChange}
        generatePassword={generatePassword}
      />
    
    </div>
  );
}

export default App;
