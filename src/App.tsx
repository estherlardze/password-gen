"use client";

import React, { useState } from "react";
import { GlobalStyles, HeadingStyle } from "./GlobalStyles";
import Input from "./components/Input";
import Generate from "./components/Generate";
import { upperCaseLetters, lowerCaseLetters, special, numbers } from "./data";

export type FormValues = {
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  symbol: boolean;
  range: number;
  password: string;
};

function App() {
  const [copied, setCopied] = useState(false);
  const [checkedCount, setCheckedCount] = useState(0);
  const [strength, setStrength] = useState("");
  const [changebg, setChangeBg] = useState("transparent");

  const [formData, setFormData] = useState<FormValues>({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
    range: 6,
    password: "",
  });

  const { uppercase, lowercase, number, symbol, password, range } = formData;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    if (uppercase) {
      chars.push(
        upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)]
      );
    }
    if (lowercase) {
      chars.push(
        lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]
      );
    }
    if (number) {
      chars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }

    if (symbol) {
      chars.push(special[Math.floor(Math.random() * special.length)]);
    }

    if (!chars.length) return "";

    return chars[Math.floor(Math.random() * chars.length)];
  };

  const copytoclip = async (str: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(str);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    } catch {
      console.log("Error");
      setCopied(false);
    }
  };

  const evaluatePasswordStrength = (password: string) => {
    let score = 0;
    if (!password) return;

    if (/[a-z]/.test(password)) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[!'^+%&/()=?_#$½§{[\]}|;:>÷`<.*-@é]/.test(password)) score += 1;

    switch (score) {
      case 0:
        setStrength("");
        break;
      case 1:
        setStrength("Too Weak");
        setChangeBg("#F64A4A");
        break;
      case 2:
        setStrength("Weak");
        setChangeBg("#FB7C58");
        break;
      case 3:
        setStrength("Medium");
        setChangeBg("#F8CD65");
        break;
      case 4:
        setStrength("Strong");
        setChangeBg("#A4FFAF");
        break;
    }
  };

  const generatePassword = () => {
    let _password = "";
    for (let i = 0; i < range; i++) {
      _password += getRandomPassword();
    }
    setFormData({ ...formData, password: _password });
    evaluatePasswordStrength(_password);
  };

  return (
    <div>
      <GlobalStyles />
      <HeadingStyle>Password Generator</HeadingStyle>
      <Input
        password={password}
        handleFormChange={handleFormChange}
        copytoclip={copytoclip}
        copied={copied}
      />
      <br />
      <Generate
        formData={formData}
        handleFormChange={handleFormChange}
        generatePassword={generatePassword}
        setCheckedCount={setCheckedCount}
        checkedCount={checkedCount}
        strength={strength}
        changebg={changebg}
      />
    </div>
  );
}

export default App;
