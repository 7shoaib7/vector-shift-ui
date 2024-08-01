// outputNode.js

import { useState } from 'react';
import BaseNode from './BaseNode';
import { TextField, MenuItem } from '@mui/material';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Output"
      inputHandles={[`${id}-value`]}  // Input handle for the value
      outputHandles={[]}  // No output handles for this node
    >
      <TextField
        label="Name"
        value={currName}
        onChange={handleNameChange}
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
      />
      <TextField
        select
        label="Type"
        value={outputType}
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
