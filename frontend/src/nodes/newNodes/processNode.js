import BaseNode from '../BaseNode';

export const ProcessNode = ({ id }) => {
  return (
    <BaseNode 
      id={id}
      title="Process" 
      inputHandles={[`${id}-input`]} 
      outputHandles={[`${id}-output`]} 
    >
      <div>
        <span>Processing data...</span>
      </div>
    </BaseNode>
  );
};
