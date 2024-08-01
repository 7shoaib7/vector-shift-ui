import { Handle, Position } from 'reactflow';
import { Typography } from '@mui/material';

const BaseNode = ({ id, title, children, inputHandles, outputHandles, handlePositions = { input: [] }, style = {} }) => {
    return (
        <div elevation={3} 
            style={{
                width: 240,
                padding: '20px',
                backgroundColor: '#2E3B55',
                borderRadius: '8px',
                ...style.node
            }}
        >
            <Typography variant="h6" style={{ color: '#FFFFFF' }}>{title}</Typography>
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
