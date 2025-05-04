"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicleById = exports.getAllVehicles = exports.deleteVehicle = exports.updateVehicle = exports.createVehicle = void 0;
var db_1 = require("../config/db");
var handleWithSQLError_1 = require("../utils/handleWithSQLError");
var createVehicle = function (vehicle) {
    return (0, handleWithSQLError_1.handleWithSQLError)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.db.execute("INSERT INTO vehicles (model, registration_no, brand_id, owner_id) VALUES (?, ?, ?, ?)", [
                        vehicle.model,
                        vehicle.registration_no,
                        vehicle.brand_id,
                        vehicle.owner_id,
                    ])];
                case 1:
                    result = (_a.sent())[0];
                    return [2 /*return*/, __assign({ id: result.insertId }, vehicle)];
            }
        });
    }); });
};
exports.createVehicle = createVehicle;
var updateVehicle = function (id, vehicle) {
    return (0, handleWithSQLError_1.handleWithSQLError)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.db.execute("UPDATE vehicles SET model = ?, registration_no = ?, brand_id = ?, owner_id = ? WHERE id = ?", [
                        vehicle.model,
                        vehicle.registration_no,
                        vehicle.brand_id,
                        vehicle.owner_id,
                        id,
                    ])];
                case 1:
                    result = (_a.sent())[0];
                    if (result.affectedRows === 0) {
                        error = new Error("Vehicle with ID ".concat(id, " does not exist."));
                        error.statusCode = 404;
                        error.code = 'ER_BAD_NOT_FOUND';
                        throw error;
                    }
                    return [2 /*return*/, __assign({ id: id }, vehicle)];
            }
        });
    }); });
};
exports.updateVehicle = updateVehicle;
var deleteVehicle = function (id) {
    return (0, handleWithSQLError_1.handleWithSQLError)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var result, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.db.execute("DELETE FROM vehicles WHERE id = ?", [id])];
                case 1:
                    result = (_a.sent())[0];
                    if (result.affectedRows === 0) {
                        error = new Error("Vehicle with ID ".concat(id, " does not exist."));
                        error.statusCode = 404; // Optional: attach HTTP status code
                        error.code = 'ER_BAD_NOT_FOUND';
                        throw error;
                    }
                    return [2 /*return*/, { message: "Vehicle with ID ".concat(id, " deleted successfully.") }];
            }
        });
    }); });
};
exports.deleteVehicle = deleteVehicle;
var getAllVehicles = function () {
    return (0, handleWithSQLError_1.handleWithSQLError)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.db.execute("SELECT v.id, v.model, v.registration_no, b.name as brand, o.name as owner, o.email as owner_email\n       FROM vehicles v\n       JOIN brands b ON v.brand_id = b.id\n       JOIN owners o ON v.owner_id = o.id")];
                case 1:
                    rows = (_a.sent())[0];
                    return [2 /*return*/, rows];
            }
        });
    }); });
};
exports.getAllVehicles = getAllVehicles;
var getVehicleById = function (id) {
    return (0, handleWithSQLError_1.handleWithSQLError)(function () { return __awaiter(void 0, void 0, void 0, function () {
        var rows, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, db_1.db.execute("SELECT v.id, v.model, v.registration_no, b.name as brand, o.name as owner, o.email as owner_email\n         FROM vehicles v\n         JOIN brands b ON v.brand_id = b.id\n         JOIN owners o ON v.owner_id = o.id\n         WHERE v.id = ?", [id])];
                case 1:
                    rows = (_a.sent())[0];
                    if (!Array.isArray(rows) || rows.length === 0) {
                        error = new Error("Vehicle with ID ".concat(id, " does not exist."));
                        error.statusCode = 404;
                        error.code = 'ER_BAD_NOT_FOUND';
                        throw error;
                    }
                    return [2 /*return*/, rows[0]];
            }
        });
    }); });
};
exports.getVehicleById = getVehicleById;
