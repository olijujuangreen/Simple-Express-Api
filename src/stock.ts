import { Router } from "express";

export const stockRouter = Router()

stockRouter.get("/", (req, res) => {
    res.send("Hello World")
})

stockRouter.get("/:ticker", (req, res) => {
    const id: String = req.query.id as String
    console.log("Hi" + id);
    res.send(req.params.ticker)
})