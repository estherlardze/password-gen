import { Include } from "../Styles";
import { FormValues } from "../App";

type GenerateProps = {
  formData: FormValues;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ formData, handleFormChange }: GenerateProps) => {
  const { uppercase, lowercase, number, symbol } = formData;

  return (
    <form>
      <Include>
        <input
          type="checkbox"
          id="uppercase"
          name="uppercase"
          checked={uppercase}
          style={{ accentColor: "#A4FFAF" }}
          onChange={handleFormChange}
        />
        <label htmlFor="uppercase">Include uppercase</label>
      </Include>

      <Include>
        <input
          type="checkbox"
          id="lowercase"
          name="lowercase"
          checked={lowercase}
          style={{ accentColor: "#A4FFAF" }}
          onChange={handleFormChange}
        />
        <label htmlFor="lowercase">Include lowercase</label>
      </Include>

      <Include>
        <input
          type="checkbox"
          id="number"
          name="number"
          checked={number}
          style={{ accentColor: "#A4FFAF" }}
          onChange={handleFormChange}
        />
        <label htmlFor="number">Include numbers</label>
      </Include>

      <Include>
        <input
          type="checkbox"
          id="symbol"
          name="symbol"
          checked={symbol}
          style={{ accentColor: "#A4FFAF" }}
          onChange={handleFormChange}
        />
        <label htmlFor="symbol">Include symbols</label>
      </Include>
    </form>
  );
};

export default Form;
