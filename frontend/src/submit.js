// submit.js

import React, { useState } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import { useStore } from './store';

export const SubmitButton = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarData, setSnackbarData] = useState({ num_nodes: 0, num_edges: 0, is_dag: false });

    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));



    const handleSubmit = async () => {
        const pipelineData = {
            nodes: nodes,
            edges: edges
        }
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST', // Change to POST for sending data
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pipelineData), // Send nodes and edges
            });

            const result = await response.json();
            if (response.ok) {
                // alert(`Number of nodes: ${result.num_nodes}, Number of edges: ${result.num_edges}, Is DAG: ${result.is_dag}`);
                setSnackbarData(result);
                setOpenSnackbar(true);  // Open the snackbar
            } else {
                alert('Error: ' + result.detail);
            }
        } catch (error) {
            console.error('Error submitting data:', error);
        }

    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };


    return (<>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                    backgroundColor: '#1C2536',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#2E2E2E',
                    },
                }}
            >
                Submit
            </Button>
        </div>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleCloseSnackbar} severity="info">
                Nodes: {snackbarData.num_nodes}, Edges: {snackbarData.num_edges}, Is DAG: {snackbarData.is_dag.toString()}
            </Alert>
        </Snackbar>
    </>
    );
};

