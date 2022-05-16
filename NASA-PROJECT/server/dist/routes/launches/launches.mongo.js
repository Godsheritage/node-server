"use strict";
// to create the schema
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const launchesSchema = new mongoose_1.default.Schema({
    flightNumber: { type: string, required: true }
});
