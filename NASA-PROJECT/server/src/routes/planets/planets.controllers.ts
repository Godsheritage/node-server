import { RequestHandler } from "express";
import getAllPlanets from "../../models/planets.model";

const httpgetAllPlanets: RequestHandler = async (req , res) => {
  res.status(200).json( await getAllPlanets());
};

export default httpgetAllPlanets;
