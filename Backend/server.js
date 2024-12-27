import express, { Router } from 'express';
import dbCon from "./utlis/db.js"
import cors from "cors"
import routers from "./routes/routes.js"
import dotenv from "dotenv";

dotenv.config()
dbCon()
const app = express()
    // app.get("/", (req, res) => {
    //     res.send("server is running 230924...")
    // });
app.use(express.json())
app.use(cors())
app.use("/api", routers)

app.listen(process.env.PORT, () => {
    console.log("server is ready")
})