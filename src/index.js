"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var dotenv = require('dotenv');
var vehicle_routes_1 = require("./routes/vehicle.routes");
var health_route_1 = require("./routes/health.route");
var swagger_1 = require("./docs/swagger");
var errorHandler_1 = require("./middlewares/errorHandler");
dotenv.config();
var app = express();
app.use(express.json());
app.use('/', health_route_1.default); // 👈 Add this line
app.use('/api/vehicles', vehicle_routes_1.default);
app.use.apply(app, __spreadArray(['/api-docs'], swagger_1.swaggerDocs, false));
app.use(errorHandler_1.errorHandler);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () { return console.log("Server running on port ".concat(PORT)); });
