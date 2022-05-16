"use strict";
// to create the schema
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const launchesSchema = new mongoose_1.default.Schema({
    flightNumber: { type: Number, required: true },
    launchDate: { type: Date, required: true },
    mission: { type: String, required: true },
    rocket: { type: String, required: true },
    target: { type: String, required: true },
    customers: [String],
    upcoming: { type: Boolean, required: true },
    sucess: { type: Boolean, default: true, required: true },
});
//connect launchesSchema with the launches collection
const launchesDatabase = mongoose_1.default.model('Launch', launchesSchema);
exports.default = launchesDatabase;
