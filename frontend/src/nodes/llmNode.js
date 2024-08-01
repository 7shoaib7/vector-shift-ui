// llmNode.js

import BaseNode from './BaseNode';

export const LLMNode = ({ id, data }) => {

  const inputHandles = [`${id}-system`, `${id}-prompt`];
  const outputHandles = [`${id}-response`];

  const handlePositions = {
    input: ['33%', '66%'], // Positions for the input handles (system, prompt)
  };


  const style = {
    node: {
      backgroundColor: '#1C2536', // Dynamic node background color
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
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
