import { Router } from "express";

export const dashboardRouter = Router()

dashboardRouter.get("/", (req, res) => {
    res.send("Hello Dashboard")
})