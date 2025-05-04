"use strict";
// utils/sqlErrorHandler.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSQLError = exports.AppError = void 0;
var AppError = /** @class */ (function (_super) {
    __extends(AppError, _super);
    function AppError(message, statusCode) {
        if (statusCode === void 0) { statusCode = 500; }
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        Error.captureStackTrace(_this, _this.constructor);
        return _this;
    }
    return AppError;
}(Error));
exports.AppError = AppError;
var handleSQLError = function (error) {
    switch (error.code) {
        case 'ER_NO_REFERENCED_ROW_2':
            throw new AppError("Foreign key constraint failed: Referenced record does not exist", 400);
        case 'ER_DUP_ENTRY':
            throw new AppError("Duplicate entry: The value you're trying to insert already exists", 400);
        case 'ER_BAD_NULL_ERROR':
            throw new AppError("Missing required field", 400);
        case 'ER_BAD_NOT_FOUND':
            throw new AppError("Id does not exists", 400);
        default:
            console.error("Unhandled SQL Error:", error);
            throw new AppError("Internal Server Error", 500);
    }
};
exports.handleSQLError = handleSQLError;
