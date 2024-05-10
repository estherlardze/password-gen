// components/CopyButton.tsx

import React from 'react';

type CopyButtonProps = {
  text: string;
};

const CopyButton: React.FC<CopyButtonProps> = ({ text }) => {
  const handleCopy = async () => {
    try {
      // Use the navigator clipboard API to copy text to the clipboard
      await navigator.clipboard.writeText(text);
      alert('Text copied to clipboard');
    } catch (error) {
      console.error('Failed to copy text:', error);
      alert('Failed to copy text to clipboard');
    }
  };

  return (
    <button onClick={handleCopy}>Copy</button>
  );
};

export default CopyButton;
