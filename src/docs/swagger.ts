const  swaggerJsDoc =require( 'swagger-jsdoc');
const swaggerUi = require( 'swagger-ui-express');

const options = {
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

export const swaggerSpec = swaggerJsDoc(options);
export const swaggerDocs = [swaggerUi.serve, swaggerUi.setup(swaggerSpec)];
