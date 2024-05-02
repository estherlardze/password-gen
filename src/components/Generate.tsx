import { useState } from 'react';
import { GenerateStyles, DivStyles, RangeInput, GenerateButton, Strength } from '../Generate.styles';
import { FiArrowRight } from "react-icons/fi";

const strengthLevels = [
  '', 'Too weak!', 'weak', 'medium', 'strong'
];

const includes = [
  'Include Uppercase Letters',
  'Include Lowercase Letters',
  'Include Numbers',
  'Include Symbols',
];

const Generate = () => {
  const [data, setData] = useState(0);
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckboxChange = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let count = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        count++;
      }
    });
    setCheckedCount(count);
  };

  const getBarColor = (index: number) => {
    if (index < checkedCount) {
      if (checkedCount === 1) return 'red';
      if (checkedCount === 2) return 'orange';
      if (checkedCount === 3) return 'yellow';
      if (checkedCount === 4) return 'green';
    }
    return 'transparent';
  };

  return (
    <GenerateStyles>
      <DivStyles>
        <p>Character Length</p>
        <h3 style={{ color: '#A4FFAF' }}>{data}</h3>
      </DivStyles>
      <RangeInput
        type="range"
        min="0"
        max="12"
        step="1"
        value={data}
        onChange={(e) => setData(parseInt(e.target.value))}
      />

      <article>
        {includes.map((include, index) => (
          <div key={include} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <input type="checkbox" style={{ accentColor: '#A4FFAF' }} onChange={handleCheckboxChange} />
            <label>{include}</label>
          </div>
        ))}
      </article>

      <Strength>
        <h3 style={{ color: '#817D92' }}>STRENGTH</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <h2 style={{ textTransform: 'uppercase', fontWeight: '600' }}>{strengthLevels[Math.min(checkedCount, strengthLevels.length - 1)]} </h2>
          <article style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {[...Array(4)].map((_, index) => (
              <div key={index} style={{ width: '7px', height: '24px', backgroundColor: getBarColor(index), border: '2px solid #e7f1e8' }}></div>
            ))}
          </article>
        </div>
      </Strength>

      <GenerateButton>
        <h3>GENERATE</h3>
        <FiArrowRight />
      </GenerateButton>
    </GenerateStyles>
  );
};

export default Generate;
