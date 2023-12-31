from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.post("/getFOS", tags=["text"])
async def get_fos(text: dict)-> dict:
    print(text)
    return {
        "data": { text['text']+" abc" }
    }