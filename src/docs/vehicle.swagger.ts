/**
 * @swagger
 * components:
 *   schemas:
 *     CreateVehicleDTO:
 *       type: object
 *       required:
 *         - model
 *         - registration_no
 *         - brand_id
 *         - owner_id
 *       properties:
 *         model:
 *           type: string
 *           example: "Toyota Corolla"
 *         registration_no:
 *           type: string
 *           example: "MH12AB1234"
 *         brand_id:
 *           type: integer
 *           example: 1
 *         owner_id:
 *           type: integer
 *           example: 10
 *     VehicleResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/CreateVehicleDTO'
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               example: 100

 * tags:
 *   - name: Vehicle
 *     description: Vehicle management APIs
 */

/**
 * @swagger
 * /api/vehicles:
 *   post:
 *     summary: Add a new vehicle
 *     tags: [Vehicle]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateVehicleDTO'
 *     responses:
 *       201:
 *         description: Vehicle created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VehicleResponse'
 */

/**
 * @swagger
 * /api/vehicles/{id}:
 *   put:
 *     summary: Update a vehicle by ID
 *     tags: [Vehicle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateVehicleDTO'
 *     responses:
 *       200:
 *         description: Vehicle updated
 *       404:
 *         description: Vehicle not found
 */

/**
 * @swagger
 * /api/vehicles/{id}:
 *   delete:
 *     summary: Delete a vehicle
 *     tags: [Vehicle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vehicle deleted
 *       404:
 *         description: Not found
 */

/**
 * @swagger
 * /api/vehicles:
 *   get:
 *     summary: Get all vehicles
 *     tags: [Vehicle]
 *     responses:
 *       200:
 *         description: List of vehicles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VehicleResponse'
 */

/**
 * @swagger
 * /api/vehicles/{id}:
 *   get:
 *     summary: Get a single vehicle
 *     tags: [Vehicle]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Vehicle details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VehicleResponse'
 *       404:
 *         description: Not found
 */


