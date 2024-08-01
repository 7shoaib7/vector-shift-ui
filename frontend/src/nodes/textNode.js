// textNode.js

import { useState } from 'react';
import BaseNode from './BaseNode';
import { TextField } from '@mui/material';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      inputHandles={[]}  // No input handles for this node
      outputHandles={[`${id}-output`]}  // Output handle for the value
    >
      <TextField
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
      />
    </BaseNode>
  );
};