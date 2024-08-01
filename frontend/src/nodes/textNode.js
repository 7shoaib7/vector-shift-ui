// textNode.js

import { useEffect, useState } from 'react';
import BaseNode from './BaseNode';
import { TextField } from '@mui/material';

export const TextNode = ({ id, data }) => {
   const defaultText = '{{input}}'

  const [currText, setCurrText] = useState(data?.text || defaultText);
  const [inputHandles, setInputHandles] = useState([`${id}-input`]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Dynamically update output handles based on variables in text
  useEffect(() => {
    if (currText.length > defaultText.length) {
      // Regex to match variable names in double curly brackets
      const matches = currText.match(/{{\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*}}/g) || [];

      // Create handles based on matches, removing curly braces
      const newHandles = matches.map(match => `${id}-${match.replace(/{{\s*|\s*}}/g, '')}`);

      // Update output handles
      setInputHandles([`${id}-input`, ...newHandles]);
    }

  }, [currText]);


  return (
    <BaseNode
      id={id}
      title="Text"
      inputHandles={inputHandles} 
      outputHandles={[]}
      style={{ minHeight: `${100 + inputHandles.length * 30}px` }} // Adjust height based on number of input handles
    >
      <TextField
        multiline
        rows={4} // Initial number of rows
        label="Text"
        value={currText}
        onChange={handleTextChange}
        fullWidth
        margin="normal"
        size="small"
        variant="outlined"
        InputLabelProps={{ style: { color: '#FFFFFF' } }}
        InputProps={{
          style: {
            color: '#FFFFFF',
            backgroundColor: '#2E2E2E',
            borderRadius: '5px',
          },
        }}
        onInput={(e) => {
          e.target.style.height = 'auto'; // Reset height
          e.target.style.height = `${e.target.scrollHeight}px`; // Set height to scrollHeight
        }}
        className="nodrag nopan"
      />
    </BaseNode>
  );
};