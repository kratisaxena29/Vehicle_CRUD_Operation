"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Check if the server is running
 *     responses:
 *       200:
 *         description: Server is up and running
 */
router.get('/health', function (req, res) {
    res.status(200).json({ message: 'Server is running 🚀' });
});
exports.default = router;
