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

type GenerateProps = {
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  generatePassword: () => void;
  formData: FormValues;
  checkedCount: number;
  setCheckedCount: React.Dispatch<React.SetStateAction<number>>;
  strength: string;
  changebg: string;
};

const Generate = ({
  formData,
  handleFormChange,
  generatePassword,
  changebg,
  strength,
}: GenerateProps) => {

  const getBarColor = (index: number) => {
    switch (strength) {
      case "Too Weak":
        return index === 0 ? changebg : "#817D92";
      case "Weak":
        return index < 2 ? changebg : "#817D92";
      case "Medium":
        return index < 3 ? changebg : "#817D92";
      case "Strong":
        return changebg;
      default:
        return "#817D92";
    }
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
            {strength}
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
                  border: `2px solid ${strength === "" ? "#817D92" : getBarColor(index)}`,
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
