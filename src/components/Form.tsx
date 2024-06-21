import { Include, Checkmark } from "../Styles";
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
        <Checkmark
          type="checkbox"
          id="uppercase"
          name="uppercase"
          checked={uppercase}
          onChange={handleFormChange}
        />
        <label htmlFor="uppercase">Include uppercase</label>
      </Include>

      <Include>
        <Checkmark
          type="checkbox"
          id="lowercase"
          name="lowercase"
          checked={lowercase}
          onChange={handleFormChange}
        />
        <label htmlFor="lowercase">Include lowercase</label>
      </Include>

      <Include>
        <Checkmark
          type="checkbox"
          id="number"
          name="number"
          checked={number}
          onChange={handleFormChange}
        />
        <label htmlFor="number">Include numbers</label>
      </Include>

      <Include>
        <Checkmark
          type="checkbox"
          id="symbol"
          name="symbol"
          checked={symbol}
          onChange={handleFormChange}
        />
        <label htmlFor="symbol">Include symbols</label>
      </Include>
    </form>
  );
};

export default Form;
