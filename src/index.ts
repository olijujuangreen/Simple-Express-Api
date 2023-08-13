import  express from "express";
import { dashboardRouter } from "./dashboard";
import { rootRouter } from "./root";
import { stockRouter } from "./stock";

const app = express()
const port = 3000

app.use("/", rootRouter)

app.use("/dashboard", dashboardRouter)

app.use("/stock", stockRouter)

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})