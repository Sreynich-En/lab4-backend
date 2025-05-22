import express from 'express';
import validateUser from '../middleware/validateUser.js';
import {
    listUsers,
    getUser,
    createUser,
    updateUserController,
    deleteUserController
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', listUsers); // List all users
router.get('/:id', getUser); // Get one user
router.post('/', createUser); // Create new user
router.put('/:id', updateUserController); // Update user
router.delete('/:id', deleteUserController); // Delete user

//bonus -- Validation middleware
router.post('/', validateUser, createUser); // Create new user with validation
router.put('/:id', validateUser, updateUserController); // Update user with validation

export default router;
