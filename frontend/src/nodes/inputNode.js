// inputNode.js
import { useState } from 'react';
import BaseNode from './BaseNode';
import { TextField, MenuItem } from '@mui/material';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    console.log("fdg",e.target.value)
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      inputHandles={[]}  // No input handles for this node
      outputHandles={[`${id}-value`]}  // Output handle for the value
    >
      <TextField
        label="Name"
        value={currName}
        onChange={handleNameChange}
        fullWidth
        margin="normal"
        size="small"
        variant="outlined" // Use outlined variant for a modern look
        InputLabelProps={{ style: { color: '#FFFFFF' } }} // Label color
        InputProps={{
          style: {
            color: '#FFFFFF', // Text color
            backgroundColor: '#2E2E2E',
            borderRadius: '5px',
          },
        }}
      />
      <TextField
        select
        label="Type"
        value={inputType}
        onChange={handleTypeChange}
        fullWidth
        margin="normal"
        size="small"
        variant="outlined"
        InputLabelProps={{ style: { color: '#FFFFFF' } }} // Label color
        InputProps={{
          style: {
            color: '#FFFFFF', // Text color
            backgroundColor: '#2E2E2E',
            borderRadius: '5px',
          },
        }}
        className="nodrag nopan"
      >
        <MenuItem value="Text">Text</MenuItem>
        <MenuItem value="File">File</MenuItem>
      </TextField>
    </BaseNode>
  );
};
