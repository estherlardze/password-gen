import styled from "styled-components";

export const GenerateStyles = styled.div`
    width: 540px;
    min-height: 300px;
    padding: 10px 20px;
    background-color: #24232c;
    color:#E6E5EA;
`

export const DivStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const RangeInput = styled.input`
  width: 100%;
  background-color: black;
  height: 10px;
  outline: none;
  transition: background-color 0.2s;
  margin-bottom: 10px;
  accent-color: #A4FFAF;
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

export const Strength = styled.div`
margin: 10px 0;
padding: 0 10px;
background-color: #18171F;
display: flex;
gap: 10px;
justify-content: space-between;
align-items: center
`

