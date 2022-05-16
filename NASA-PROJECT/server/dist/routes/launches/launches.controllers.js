"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpAbortLaunch = exports.httpAddNewLaunch = void 0;
const launches_model_1 = __importStar(require("../../models/launches.model"));
//get all launches
const httpGetAllLaunches = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).json(yield (0, launches_model_1.default)());
});
// post controller
const httpAddNewLaunch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const launch = req.body;
    if (!launch.mission ||
        !launch.rocket ||
        !launch.launchDate ||
        !launch.target) {
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
    yield (0, launches_model_1.scheduleNewLaunch)(launch);
    return res.status(201).json(launch);
});
exports.httpAddNewLaunch = httpAddNewLaunch;
const httpAbortLaunch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const launchId = +req.params.id;
    //launch validation
    const existsLaunch = yield (0, launches_model_1.existLaunchWithId)(launchId);
    if (!existsLaunch) {
        res.status(404).json({
            error: "Launch not found",
        });
    }
    const aborted = yield (0, launches_model_1.abortLaunchById)(launchId);
    if (!aborted) {
        return res.status(400).json({
            error: `Launch not aborted`
        });
    }
    return res.status(200).json({
        ok: true
    });
});
exports.httpAbortLaunch = httpAbortLaunch;
exports.default = httpGetAllLaunches;
