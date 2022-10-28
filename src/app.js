import express from "express";

const app = express();

app.set("port", process.env.PORT || 3000)

app.use("/", (req,res) => {
    res.send("Welcome to Planetscale API");
})

app.listen(3000, () => {
    console.log("server is running on port ", app.get("port"));
})