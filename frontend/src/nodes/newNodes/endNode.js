import BaseNode from '../BaseNode';

export const EndNode = ({ id }) => {
  return (
    <BaseNode 
      id={id}
      title="End" 
      inputHandles={[`${id}-prev`]} 
      outputHandles={[]} 
    >
      <div>
        <span>This is the end of the process.</span>
      </div>
    </BaseNode>
  );
};
