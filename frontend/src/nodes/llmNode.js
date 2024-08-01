// llmNode.js

import BaseNode from './BaseNode';
import { Typography } from '@mui/material';

export const LLMNode = ({ id, data }) => {

  const inputHandles = [`${id}-system`, `${id}-prompt`];
  const outputHandles = [`${id}-response`];

  const handlePositions = {
    input: ['33%', '66%'], // Positions for the input handles (system, prompt)
  };


  const style = {
    node: {
      backgroundColor: '#2E3B55', // Dynamic node background color
      color: '#fff', // Dynamic text color
    },
    handle: {
      // Dynamic styles for handles
      cursor: 'pointer',
    },
  };

  return (
    <BaseNode
      id={id}
      title="LLM"
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      handlePositions={handlePositions} // Pass handle positions
      style={style} // Pass dynamic styles
    >
      <Typography variant="body1" style={{ color: '#FFFFFF' }}>This is a LLM.</Typography>
    </BaseNode>
  );
}
