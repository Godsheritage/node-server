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
const http_1 = __importDefault(require("http"));
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const planets_model_1 = require("./models/planets.model");
const PORT = process.env.PORT || 5000;
const MONGO_URL = 'mongodb+srv://nasa-api:Heritage4lyf@nasacluster.ndy00.mongodb.net/nasa?retryWrites=true&w=majority';
const server = http_1.default.createServer(app_1.default);
mongoose_1.default.connection.once('open', () => {
    console.log('MongoDB Connection is ready');
});
mongoose_1.default.connection.on('eror', (err) => {
    console.error(err);
});
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(MONGO_URL);
    yield (0, planets_model_1.loadPlanetsData)();
    server.listen(PORT, () => {
        console.log(`server is listenening on port ${PORT}...`);
    });
});
startServer();
