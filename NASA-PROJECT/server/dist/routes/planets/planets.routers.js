"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const planets_controllers_1 = __importDefault(require("./planets.controllers"));
const planetRouter = express_1.default.Router();
planetRouter.get("/", planets_controllers_1.default);
exports.default = planetRouter;
