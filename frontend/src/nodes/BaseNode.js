import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, title, children, inputHandles, outputHandles,handlePositions = { input: [] }, style = {} }) => {
    return (
        <div style={{ width: 200, height: 80, border: '1px solid black', ...style.node }}>
            <div>
                <span>{title}</span>
            </div>
            <div>{children}</div>
            {inputHandles.map((handleId, index) => (
                <Handle
                    key={handleId}
                    type="target"
                    position={Position.Left}
                    id={handleId}
                    style={{ top: handlePositions.input[index], ...style.handle }} // Apply dynamic styles
                />
            ))}
            {outputHandles.map((handleId) => (
                <Handle
                    key={handleId}
                    type="source"
                    position={Position.Right}
                    id={handleId}
                    style={{ ...style.handle }} // Apply dynamic styles
                />
            ))}
        </div>
    );
};

export default BaseNode;
