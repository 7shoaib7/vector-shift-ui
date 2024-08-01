import BaseNode from '../BaseNode';
import { Typography, Box } from '@mui/material';

export const ProcessNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Process"
      inputHandles={[`${id}-input`]}
      outputHandles={[`${id}-output`]}
    >
      <Box>
        <Typography style={{ color: '#FFFFFF' }}>
          Processing data...
        </Typography>
      </Box>
    </BaseNode>
  );
};
