import { RequestHandler } from "express";
import getAllLaunches, {
  abortLaunchById,
  scheduleNewLaunch,
  existLaunchWithId,
} from "../../models/launches.model";

//get all launches
const httpGetAllLaunches: RequestHandler = async (req, res) => {
  return res.status(200).json( await getAllLaunches());
};

// post controller
export const httpAddNewLaunch: RequestHandler = async (req, res) => {
  const launch = req.body;

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "missing required launch properties",
    });
  }

  launch.launchDate = new Date(launch.launchDate);

  if (launch.launchDate.toString() === "Invalid Date") {
    return res.status(400).json({
      error: "invalid launch date",
    });
  }
  await scheduleNewLaunch(launch);
  return res.status(201).json(launch);
};


export const httpAbortLaunch: RequestHandler = async (req, res) => {
  const launchId = +req.params.id;

  //launch validation
  const existsLaunch = await existLaunchWithId(launchId)
  if (!existsLaunch) {
    res.status(404).json({
      error: "Launch not found",
    });
  }

  const aborted = await abortLaunchById(launchId)
  if(!aborted){
    return res.status(400).json({
      error : `Launch not aborted`
    })
  }

  return res.status(200).json({
    ok: true
  })
};

export default httpGetAllLaunches;
