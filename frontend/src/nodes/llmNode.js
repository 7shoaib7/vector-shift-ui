// llmNode.js

import BaseNode from './BaseNode';
import { Typography } from '@mui/material';

export const LLMNode = ({ id, data }) => {

  const inputHandles = [`${id}-system`, `${id}-prompt`];
  const outputHandles = [`${id}-response`];

  const style = {
    node: {
      backgroundColor: '#2E3B55', // Dynamic styles node 
      color: '#fff',
      minHeight:"100px"
    },
    handle: {
      // Dynamic styles for handles
    },
  };

  return (
    <BaseNode
      id={id}
      title="LLM"
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      style={style} // Pass dynamic styles
    >
      <Typography variant="body1" style={{ color: '#FFFFFF' }}>This is a LLM.</Typography>
    </BaseNode>
  );
}
