// StartNode.js
import BaseNode from '../BaseNode';

export const StartNode = ({ id }) => {
  return (
    <BaseNode 
      id={id}
      title="Start" 
      inputHandles={[]} 
      outputHandles={[`${id}-next`]} 
    >
      <div>
        <span>This is the start of the process.</span>
      </div>
    </BaseNode>
  );
};
