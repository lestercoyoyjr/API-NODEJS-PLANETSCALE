import { Router } from "express";

const indexRouter = Router();

// root endpoint     
indexRouter.get("/", (req,res) => {
    res.send("Welcome to Planetscale API");
})

// get Countries
indexRouter.get("/country", (req,res) =>{
    res.send("countries");
})

export default indexRouter;