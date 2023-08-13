import { Router } from "express";

export const rootRouter = Router()

rootRouter.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
});

rootRouter.get("/status", (req, res) => {
    res.json({
        status: "ok"
    })
})