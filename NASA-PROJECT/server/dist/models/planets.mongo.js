"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const planetSchema = new mongoose_1.default.Schema({
    keplerName: { type: String, required: true },
});
//connect planetschema with the planet collection
const planets = mongoose_1.default.model('planet', planetSchema);
exports.default = planets;
