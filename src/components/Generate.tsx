import React, { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Form from "./Form";
import { FormValues } from "../App";
import {
  GenerateStyles,
  ChracterStyles,
  RangeInput,
  GenerateButton,
  Strength,
} from "../Styles";


const strengthLevels = ["", "Too weak!", "weak", "medium", "strong"];

type GenerateProps = {
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  generatePassword: () => void;
  formData: FormValues;
}

const Generate: React.FC<GenerateProps> = ({formData,handleFormChange, generatePassword,}) => {
  const [checkedCount, setCheckedCount] = useState(0);


  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]') as NodeListOf<HTMLInputElement>;
    let count = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        count++;
      }
    });
    setCheckedCount(count);
  };

  const getBarColor = (index: number) => {
    if (index < checkedCount) {
      if (checkedCount === 1) return "#F64A4A";
      if (checkedCount === 2) return "#FB7C58";
      if (checkedCount === 3) return "#F8CD65";
      if (checkedCount === 4) return "#A4FFAF";
    }
    return "transparent";
  };

  return (
    <GenerateStyles>
      <ChracterStyles>
        <p>Character Length</p>
        <h3 style={{ color: "#A4FFAF" }}>{formData.range}</h3>
      </ChracterStyles>
      <RangeInput
        type="range"
        min="6"
        max="16"
        step="1"
        value={formData.range}
        name="range"
        onChange={handleFormChange}
      />

      <Form formData={formData} handleFormChange={handleFormChange} />

      <Strength>
        <h3 style={{ color: "#817D92" }}>STRENGTH</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <h2 style={{ textTransform: "uppercase", fontWeight: "600" }}>
            {strengthLevels[Math.min(checkedCount, strengthLevels.length - 1)]}
          </h2>
          <article
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                style={{
                  width: "7px",
                  height: "24px",
                  backgroundColor: getBarColor(index),
                  border: "2px solid #e7f1e8",
                }}
              ></div>
            ))}
          </article>
        </div>
      </Strength>

      <GenerateButton onClick={generatePassword}>
        <h3>GENERATE</h3>
        <FiArrowRight />
      </GenerateButton>
    </GenerateStyles>
  );
};

export default Generate;
