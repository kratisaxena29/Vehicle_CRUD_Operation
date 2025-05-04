"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = exports.swaggerSpec = void 0;
var swaggerJsDoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Vehicle API',
            version: '1.0.0',
        },
        components: {
            schemas: {
                CreateVehicleDTO: {
                    type: 'object',
                    required: ['model', 'registration_no', 'brand_id', 'owner_id'],
                    properties: {
                        model: { type: 'string' },
                        registration_no: { type: 'string' },
                        brand_id: { type: 'integer' },
                        owner_id: { type: 'integer' },
                    },
                },
            },
        },
    },
    apis: ['./src/docs/*.ts'],
};
exports.swaggerSpec = swaggerJsDoc(options);
exports.swaggerDocs = [swaggerUi.serve, swaggerUi.setup(exports.swaggerSpec)];
