import React from 'react'
import styled from 'styled-components'
import { arrowright } from '../assets'


const GenerateStyles = styled.div`
    width: 540px;
    height: 300px;
    padding: 10px 20px;
    background-color: #24232c;
    color:#E6E5EA;
`

const DivStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RangeInput = styled.input`
  width: 100%;
  background-color: black;
  height: 10px;
  outline: none;
  transition: background-color 0.2s;
  margin-bottom: 10px;
`;


const includes = [
  'Include Uppercase Letters',
  'Include Lowercase Letters',
  'Include Numbers',
  'Include Symbols',
]

const Generate = () => {
  return (
    <GenerateStyles>
        <DivStyles>
          <p>Character Length</p>
          <h3 style={{color: '#A4FFAF'}}>4</h3>
        </DivStyles>
        <RangeInput type="range" min="0" max="12"/>

        <article>
          {includes.map((include) => (
              <div key={include} style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                <input type="checkbox" />
                <label>{include}</label>
              </div>
          ))}
        </article>

        <div style={{margin: '10px 0', padding: '0 10px', backgroundColor: '#18171F', display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems:'center'}}>
            <h3>STRENGTH</h3>
            <div>
              <div>hhhjj</div>
            </div>
        </div>

        <div style={{margin: '10px 0', padding: '0 10px', backgroundColor: '#A4FFAF',color: 'black', display: 'flex', gap: '10px', justifyContent: 'center', alignItems:'center'}}>
            <h3>GENERATE</h3>
            <div>
              <img src={arrowright} alt="arrow"/>
            </div>
        </div>
    </GenerateStyles>
  )
}

export default Generate