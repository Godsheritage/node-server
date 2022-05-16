import express from "express";
import  httpgetAllPlanets  from "./planets.controllers";

const planetRouter = express.Router();

planetRouter.get("/", httpgetAllPlanets);

export default planetRouter;
