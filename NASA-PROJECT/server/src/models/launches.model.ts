import launchesDatabase from "./launches.mongo";
import planets from "./planets.mongo";

const launches = new Map();

let latestFlightNumber = 100;

let DEFAULT_FLIGHT_NUMBER = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration x",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["Nasa", "Godsheritage"],
  upcoming: true,
  success: true,
};

//to get the latest flight number
const getLatestFlightNumber = async () => {
  const latestLaunch = await launchesDatabase.findOne().sort("-flightNumber");

  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }

  return latestLaunch.flightNumber;
};

//to get all the launches from the database
const getAllLaunches = async () => {
  return await launchesDatabase.find({}, { _id: 0, __v: 0 });
};

//to save the launches to the databse
const saveLaunch = async (launch: any) => {
  const planet = await planets.findOne({
    keplerName: launch.target,
  });
  if (!planet) {
    throw new Error("No matching planets found");
  }
  await launchesDatabase.findOneAndUpdate(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    {
      upsert: true,
    }
  );
};

saveLaunch(launch);

export const existLaunchWithId = async (launchId: any) => {
  return await launchesDatabase.findOne({ flightNumber: launchId });
};


//to schedule a new launch and assign the incremental flight number
export const scheduleNewLaunch = async (launch: any) => {
  const newFlightNumber = (await getLatestFlightNumber()) + 1;
  const newLaunch = Object.assign(launch, {
    upcoming: true,
    success: true,
    custumers: ["Godsheritage", "Crownfit"],
    flightNumber: newFlightNumber,
  });

  await saveLaunch(newLaunch);
};

//to abort launches with id
export const abortLaunchById = async (launchId: any) => {
  const aborted: any = await launchesDatabase.updateOne(
    {
      flightNumber: launchId,
    },
    {
      upcoming: false,
      sucess: false,
    }
  );
  return aborted.modifiedCount === 1;

};

export default getAllLaunches;
