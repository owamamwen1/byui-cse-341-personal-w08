const express = require('express');
const router = express.Router();
const validation = require('../middleware/validate.js');
require('dotenv').config();

const userController = require('../controllers/user');

router.get('/', userController.getAll);
router.get('/:username', userController.getUser);
router.post('/', validation.saveFaculty, userController.create); // Middleware validate
router.put('/:username',validation.updateFaculty, userController.updateUser); //  Middleware validate
router.delete('/:username', userController.deleteUser);

module.exports = router;
