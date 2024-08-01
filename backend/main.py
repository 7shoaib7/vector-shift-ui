from fastapi import FastAPI, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# Allow CORS for frontend application
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

# @app.get('/pipelines/parse')
# def parse_pipeline(pipeline: str = Form(...)):
#     return {'status': 'parsed'}

@app.post('/pipelines/parse')  # Change to POST to accept JSON data
async def parse_pipeline(pipeline: dict):  # Expecting a JSON body
    num_nodes = len(pipeline.get("nodes", []))
    num_edges = len(pipeline.get("edges", []))
    
    return JSONResponse(content={'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': True})
