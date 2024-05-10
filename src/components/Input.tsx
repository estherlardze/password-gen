import React, { useState } from 'react';
import { iconcopy } from '../assets';
import { FormValues } from '../App';
import { DivStyles, InputStyles, ImageStyles } from '../Styles';



type GenerateProps = {
  formData: FormValues;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<GenerateProps> = ({formData, handleFormChange})=> {
  const [copied, setCopied] = useState(false);

  return (
    <DivStyles>
        <InputStyles 
          type="text" 
          placeholder='PTx1f5DaFX!' 
          value={formData.password}
          onChange={handleFormChange}
          />
         <ImageStyles 
          src={iconcopy} 
          alt="copy icon"
          onClick={() => copyToClipboard(formData.password, () => setCopied(true))}
/>
    </DivStyles>
  )
}

export default Input