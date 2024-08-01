import { Handle, Position } from 'reactflow';
import { Typography, Box } from '@mui/material';

const BaseNode = ({ id, title, children, inputHandles, outputHandles, handlePositions = { input: [] }, style = {} }) => {
    const handleSpacing = 30;
    return (
        <div elevation={3}
            style={{
                width: 240,
                padding: '20px',
                backgroundColor: '#2E3B55',
                borderRadius: '8px',
                ...style.node,
                ...style,
            }}
        >
            <Typography variant="h6" style={{ color: '#FFFFFF' }}>{title}</Typography>
            <div>{children}</div>
            {inputHandles.map((handleId, index) => {
                return <Handle
                    key={handleId}
                    type="target"
                    position={Position.Left}
                    id={handleId}
                    style={{ top: `${60 + index * handleSpacing}px`, ...style.handle }} // Apply dynamic styles
                />
            })}
            {outputHandles.map((handleId, index) => (
                <Handle
                    key={handleId}
                    type="source"
                    position={Position.Right}
                    id={handleId}
                    style={{ top: `${60 + index * handleSpacing}px`, ...style.handle }} // Apply dynamic styles
                />
            ))}
        </div>
    );
};

export default BaseNode;
