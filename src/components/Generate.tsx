import { FiArrowRight } from "react-icons/fi";
import Form from "./Form";
import { FormValues } from "../App";
import {
  GenerateStyles,
  ChracterStyles,
  RangeInput,
  GenerateButton,
  Strength,
  FlexStyle,
  StrengthText,
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
  const getBarStyle = (index: number) => {
    const thresholds: { [key: string]: number } = {
      "Too Weak!": 1,
      Weak: 2,
      Medium: 3,
      Strong: 4,
    };

    const threshold = thresholds[strength] || 0;
    return {
      width: "8px",
      height: "24px",
      backgroundColor: index < threshold ? changebg : "transparent",
      border:
        index < threshold ? ` 2px solid ${changebg}` : "2px solid #817D92",
    };
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
        <FlexStyle>
          <StrengthText>{strength}</StrengthText>
          <FlexStyle>
            {[...Array(4)].map((_, index) => (
              <div key={index} style={getBarStyle(index)}></div>
            ))}
          </FlexStyle>
        </FlexStyle>
      </Strength>

      <GenerateButton onClick={generatePassword}>
        <h3>GENERATE</h3>
        <FiArrowRight />
      </GenerateButton>
    </GenerateStyles>
  );
};

export default Generate;
