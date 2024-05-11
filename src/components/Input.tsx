import React, { useState } from 'react';
import { iconcopy } from '../assets';
import { FormValues } from '../App';
import { DivStyles, InputStyles, ImageStyles } from '../Styles';



type GenerateProps = {
  formData: FormValues;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  copytoclip : (str: string) => Promise<void>
}

const Input:React.FC<GenerateProps> = ({formData, handleFormChange, copytoclip})=> {

  return (
    <DivStyles>
        <InputStyles 
          type="text" 
          placeholder='PTx1f5DaFX!' 
          value={formData.password}
          onChange={handleFormChange}
          />
          <div onClick={() => copytoclip(formData.password)}>
          <ImageStyles 
          src={iconcopy} 
          alt="copy icon"
          />
          </div>
         
    </DivStyles>
  )
}

export default Input