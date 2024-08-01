import BaseNode from '../BaseNode';

export const NotifyNode = ({ id }) => {
  return (
    <BaseNode 
      id={id}
      title="Notify" 
      inputHandles={[`${id}-input`]} 
      outputHandles={[`${id}-output`]} 
    >
      <div>
        <span>Notify user or system!</span>
      </div>
    </BaseNode>
  );
};
