"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const planets_routers_1 = __importDefault(require("./routes/planets/planets.routers"));
const launches_routers_1 = __importDefault(require("./routes/launches/launches.routers"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use(express_1.default.json());
app.use('/v1/planets', planets_routers_1.default);
app.use('/v1/launches', launches_routers_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public ")));
app.get("/v1/*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "..", "public ", "index.html"));
});
exports.default = app;
