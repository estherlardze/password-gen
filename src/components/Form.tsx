import { Include } from "../Styles";
import { FormValues } from "../App";

type GenerateProps = {
  formData: FormValues;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<GenerateProps> = ({ formData, handleFormChange }) => {
  console.log(formData);

  return (
    <form>
      <Include>
        <input
          type="checkbox"
          id="uppercase"
          name="isUppercase"
          checked={formData.isUppercase}
          style={{ accentColor: "#A4FFAF" }}
          onChange={handleFormChange}
        />
        <label htmlFor="uppercase">Include uppercase</label>
      </Include>

      <Include>
        <input
          type="checkbox"
          id="lowercase"
          name="isLowercase"
          checked={formData.isLowercase}
          style={{ accentColor: "#A4FFAF" }}
          onChange={handleFormChange}
        />
        <label htmlFor="lowercase">Include lowercase</label>
      </Include>

      <Include>
        <input
          type="checkbox"
          id="number"
          name="isNumber"
          checked={formData.isNumber}
          style={{ accentColor: "#A4FFAF" }}
          onChange={handleFormChange}
        />
        <label htmlFor="number">Include numbers</label>
      </Include>

      <Include>
        <input
          type="checkbox"
          id="symbol"
          name="isSymbol"
          checked={formData.isSymbol}
          style={{ accentColor: "#A4FFAF" }}
          onChange={handleFormChange}
        />
        <label htmlFor="symbol">Include symbols</label>
      </Include>
    </form>
  );
};

export default Form;
