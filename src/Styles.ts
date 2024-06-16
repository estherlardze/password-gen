import styled from "styled-components";

export const GenerateStyles = styled.div`
    width: 540px;
    min-height: 300px;
    padding: 10px 20px;
    background-color: #24232c;
    color:#E6E5EA;
    
    @media (max-width: 650px) {
       width: 400px;
    }
    @media (max-width: 500px) {
       width: 330px;
    }
    @media (max-width: 400px) {
       width: 300px;
    }
    @media (max-width: 360px) {
       width: 250px;
    }
`

export const ChracterStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const RangeInput = styled.input`
  width: 100%;
  background: black;
  height: 12px; 
  outline: none;
  border-radius: 12px; 
  transition: background-color 0.2s;
  margin-bottom: 10px;
  accent-color: #A4FFAF;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;
  box-shadow: inset 0px 3px 18px rgba(0, 0, 0, 0.35);

  &::-webkit-slider-thumb {
    appearance: none;
    height: 13px; 
    width: 13px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
    box-shadow: -407px 0 0 400px #A4FFAF;
  }

  &::-moz-range-thumb {
    height: 13px;
    width: 13px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer; 
  }

  &::-ms-thumb {
    height: 13px; 
    width: 13px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid #fff;
    cursor: pointer;
  }

  &:hover {
    &::-webkit-slider-thumb {
      background: black;
      border: 2px solid #A4FFAF;
      transition: all 0.5s;
    }
    &::-moz-range-thumb {
      background: black;
      border: 2px solid #A4FFAF;
      transition: all 0.5s;
    }
    &::-ms-thumb {
      background: black;
      border: 2px solid #A4FFAF;
      transition: all 0.5s;
    }
  }
`;


export const GenerateButton = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: #A4FFAF;
  color: black;
  padding: 0 10px;
  margin: 10px 0;
  border: 1px solid #A4FFAF;
  transition: all 0.5s;

  &:hover {
      border: 1px solid #A4FFAF;
      background-color: transparent;
      cursor: pointer;
      color: #A4FFAF;
  }
`
export const Checkmark = styled.input`
accent-color: #A4FFAF;

&:hover{
   accent-color: #A4FFAF;
}
`

export const Strength = styled.div`
margin: 10px 0;
padding: 0 10px;
background-color: #18171F;
display: flex;
gap: 10px;
justify-content: space-between;
align-items: center
`;

export const StrengthText = styled.h2`
text-transform: uppercase;
font-weight: 600;
font-size: 14px 
`
export const FlexStyle = styled.div`
display: flex;
align-items: center;
gap:10px; 
`

export const Include = styled.div`
 display: flex;
 align-items:center;
 margin-top: 10px;
`

export const DivStyles = styled.div`
    width: 540px;
    height: 50px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #24232c;
    color:#E6E5EA;

    @media (max-width: 650px) {
       width: 400px;
    }
    @media (max-width: 500px) {
       width: 330px;
    }
    @media (max-width: 400px) {
       width: 300px;
    }
    @media (max-width: 360px) {
       width: 250px;
    }
`

export const InputStyles = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  color: white;
  width:100%;
`

export const ImageStyles = styled.img`
  transition: all 0.5s;
  filter: grayscale(0%);

  &:hover {
    cursor: pointer;
    filter: grayscale(100%);
  }
`

export const CopyDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #A4FFAF;
`

