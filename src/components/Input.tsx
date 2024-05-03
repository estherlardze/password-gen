import styled from 'styled-components'
import { iconcopy } from '../assets';
import { FormValues } from '../App';

const DivStyles = styled.div`
    width: 540px;
    height: 50px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #24232c;
    color:#E6E5EA;
`

const InputStyles = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  color: white;
  width:100%;
`

const ImageStyles = styled.img`
  transition: all 0.5s;
  filter: grayscale(0%);

  &:hover {
    cursor: pointer;
    filter: grayscale(100%);
  }
`

interface GenerateProps {
  formData: FormValues;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Input:React.FC<GenerateProps> = ({formData, handleFormChange})=> {

  return (
    <DivStyles>
        <InputStyles 
          type="text" 
          placeholder='PTx1f5DaFX!' 
          value={formData.password}
          onChange={handleFormChange}
          />
          <ImageStyles src={iconcopy} alt="copy icon"/>
    </DivStyles>
  )
}

export default Input