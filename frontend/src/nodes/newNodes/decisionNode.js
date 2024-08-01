import BaseNode from "../BaseNode";

export const DecisionNode = ({ id }) => {
    return (
        <BaseNode
            id={id}
            title="Decision"
            inputHandles={[`${id}-input`]}
            outputHandles={[`${id}-yes`, `${id}-no`]}
        >
            <div>
                <span>Is the condition met?</span>
            </div>
        </BaseNode>
    );
};
