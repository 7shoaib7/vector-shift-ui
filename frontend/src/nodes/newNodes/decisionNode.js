import BaseNode from "../BaseNode";
import { Typography, Box } from '@mui/material';


export const DecisionNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="Decision"
            inputHandles={[`${id}-input`]}
            outputHandles={[`${id}-yes`, `${id}-no`]}
        >
            <Box>
                <Typography style={{ color: '#FFFFFF' }}>
                    Is the condition met?
                </Typography>
            </Box>
        </BaseNode >
    );
};
