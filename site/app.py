import json

from dotenv import load_dotenv

load_dotenv()

import asyncio
import os
import threading
from string import ascii_uppercase

import aiohttp
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.responses import Response
from fastapi.staticfiles import StaticFiles

from pydantic import BaseModel


class Order(BaseModel):
    contact: str
    name: str
    product: str


app = FastAPI()


message = """
*Поступил новый заказ на {product}*%0A%0A
Контакт: {contact}%0AИмя клиента: {name}
"""
translate_product_name = {
    "shelf": "Стеллажи",
    "wardrobe": "Шкафы",
    "safe": "Сейфы",
    "dressing": "Гардеробные системы",
    "workbench": "Верстаки"
}


app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
async def main_page():
    print("WOW")

    fp = open("templates/main-page.html", encoding="utf-8")

    return HTMLResponse(
        content=fp.read(),
    )


@app.post("/order/")
async def create_new_order(order: Order):
    text = message.format(contact=order.contact,
                          name=order.name,
                          product=translate_product_name[order.product])

    async with aiohttp.ClientSession() as session:
        async with session.get(
            url=f"https://api.telegram.org/bot{os.environ.get("BOT_TOKEN")}"
                f"/sendMessage?chat_id={935570478}&text={text}&parse_mode=MarkdownV2"
        ) as response:
            if response.status == 200:
                print("SENDED")

                return Response(
                    content=json.dumps({"OK": True, "message": "Увидели вас, мы вам перезвоним в течении дня!"}),
                )
            else:
                print(await response.json())
                print(f"ERROR: {response.status}")

                return Response(
                    content={"OK": False, "message": ""},
                    status_code=400
                )
