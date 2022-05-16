"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abortLaunchById = exports.scheduleNewLaunch = exports.existLaunchWithId = void 0;
const launches_mongo_1 = __importDefault(require("./launches.mongo"));
const planets_mongo_1 = __importDefault(require("./planets.mongo"));
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
const getLatestFlightNumber = () => __awaiter(void 0, void 0, void 0, function* () {
    const latestLaunch = yield launches_mongo_1.default.findOne().sort("-flightNumber");
    if (!latestLaunch) {
        return DEFAULT_FLIGHT_NUMBER;
    }
    return latestLaunch.flightNumber;
});
//to get all the launches from the database
const getAllLaunches = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield launches_mongo_1.default.find({}, { _id: 0, __v: 0 });
});
//to save the launches to the databse
const saveLaunch = (launch) => __awaiter(void 0, void 0, void 0, function* () {
    const planet = yield planets_mongo_1.default.findOne({
        keplerName: launch.target,
    });
    if (!planet) {
        throw new Error("No matching planets found");
    }
    yield launches_mongo_1.default.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    });
});
saveLaunch(launch);
const existLaunchWithId = (launchId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield launches_mongo_1.default.findOne({ flightNumber: launchId });
});
exports.existLaunchWithId = existLaunchWithId;
//to schedule a new launch and assign the incremental flight number
const scheduleNewLaunch = (launch) => __awaiter(void 0, void 0, void 0, function* () {
    const newFlightNumber = (yield getLatestFlightNumber()) + 1;
    const newLaunch = Object.assign(launch, {
        upcoming: true,
        success: true,
        custumers: ["Godsheritage", "Crownfit"],
        flightNumber: newFlightNumber,
    });
    yield saveLaunch(newLaunch);
});
exports.scheduleNewLaunch = scheduleNewLaunch;
//to abort launches with id
const abortLaunchById = (launchId) => __awaiter(void 0, void 0, void 0, function* () {
    const aborted = yield launches_mongo_1.default.updateOne({
        flightNumber: launchId,
    }, {
        upcoming: false,
        sucess: false,
    });
    return aborted.modifiedCount === 1;
});
exports.abortLaunchById = abortLaunchById;
exports.default = getAllLaunches;
