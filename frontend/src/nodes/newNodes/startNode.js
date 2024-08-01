// StartNode.js
import BaseNode from '../BaseNode';
import { Typography, Box } from '@mui/material';

export const StartNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Start"
      inputHandles={[]}
      outputHandles={[`${id}-next`]}
    >
      <Box>
        <Typography style={{ color: '#FFFFFF' }}>
          This is the start of the process.
        </Typography>
      </Box>
    </BaseNode>
  );
};
