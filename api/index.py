from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import os

app = FastAPI()

# Dummy data for shoes
shoes_db = [
    {"id": 1, "name": "Sneaker", "image": "/images/sneaker.jpg"},
    {"id": 2, "name": "Sandals", "image": "/images/sandals.jpg"},
    {"id": 3, "name": "Boots", "image": "/images/boots.jpg"}
]

class ShoeAddToCart(BaseModel):
    shoeId: int

class CheckoutRequest(BaseModel):
    name: str
    address: str

class ResponseMessage(BaseModel):
    message: str

@app.get("/api/products", response_model=List[dict])
async def get_products():
    return shoes_db

@app.post("/api/cart", response_model=ResponseMessage)
async def add_to_cart(shoe: ShoeAddToCart):
    if not any(shoe.id == s['id'] for s in shoes_db):
        raise HTTPException(status_code=404, detail="Shoe not found")
    return ResponseMessage(message="Shoe added to cart")

@app.post("/api/checkout", response_model=ResponseMessage)
async def checkout(order: CheckoutRequest):
    # Log order submission or integrate with payment service here
    return ResponseMessage(message="Order submitted!")
