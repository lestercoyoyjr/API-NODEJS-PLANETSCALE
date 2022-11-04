import { Router } from "express";

const countryRouter = Router();

countryRouter.get("/", (req,res) => {
    res.send("countries");
})

export default countryRouter;