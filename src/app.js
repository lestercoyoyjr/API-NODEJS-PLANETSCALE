import express from "express";

import db from "./config/db.js";

const app = express();

app.set("port", process.env.PORT || 3000)

app.use("/", (req,res) => {
    res.send("Welcome to Planetscale API");
})

app.listen(3000, () => {
    console.log("server is running on port ", app.get("port"));
})

db.connect()
.then(()=>{
    console.log("Connected to database");
})
.catch((err) =>{
    console.log("Error! ", err);
});