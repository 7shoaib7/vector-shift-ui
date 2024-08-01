// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />

                <DraggableNode type='start' label='Start' />
                <DraggableNode type='end' label='End' />
                <DraggableNode type='decision' label='Decision' />
                <DraggableNode type='process' label='Process' />
                <DraggableNode type='notify' label='Notify' />
            </div>
        </div>
    );
};

