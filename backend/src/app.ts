 import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));

app.get("/", (req,res)=>res.send("Hexada Backend Running"));

export default app;