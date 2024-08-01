import BaseNode from '../BaseNode';
import { Typography, Box } from '@mui/material';

export const NotifyNode = ({ id }) => {
  return (
    <BaseNode 
      id={id}
      title="Notify" 
      inputHandles={[`${id}-input`]} 
      outputHandles={[`${id}-output`]} 
    >
      <Box>
        <Typography style={{ color: '#FFFFFF' }}>
        Notify user or system!
        </Typography>
      </Box>
    </BaseNode>
  );
};
