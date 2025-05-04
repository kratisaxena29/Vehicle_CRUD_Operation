"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleSchema = void 0;
var yup = require("yup");
exports.vehicleSchema = yup.object({
    model: yup
        .string()
        .strict()
        .required('Model is required')
        .typeError('Model must be a string'),
    registration_no: yup
        .string()
        .strict()
        .required('Registration number is required')
        .typeError('Registration number must be a string'),
    brand_id: yup
        .number()
        .strict()
        .typeError('Brand ID must be a number')
        .required('Brand ID is required')
        .integer('Brand ID must be an integer'),
    owner_id: yup
        .number()
        .strict()
        .typeError('Owner ID must be a number')
        .required('Owner ID is required')
        .integer('Owner ID must be an integer'),
});
