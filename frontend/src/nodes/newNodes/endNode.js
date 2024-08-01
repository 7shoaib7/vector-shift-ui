import BaseNode from '../BaseNode';
import { Typography, Box } from '@mui/material';

export const EndNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="End"
      inputHandles={[`${id}-prev`]}
      outputHandles={[`${id}-next`]}
    >
      <Box>
        <Typography style={{ color: '#FFFFFF' }}>
          This is the end of the process.
        </Typography>
      </Box>
    </BaseNode>
  );
};
