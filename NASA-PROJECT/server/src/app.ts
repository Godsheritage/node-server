import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import planetRouter from "./routes/planets/planets.routers";
import launchesRouter from "./routes/launches/launches.routers";

const app = express();

app.use(cors());

app.use(morgan("combined"));
app.use(express.json());
app.use('/v1/planets', planetRouter);
app.use('/v1/launches', launchesRouter);
app.use(express.static(path.join(__dirname, "..", "public ")));
app.get("/*", (req , res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});

export default app;
