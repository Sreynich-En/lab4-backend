import express from 'express';

import {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getArticlesByCategoryId
} from '../controllers/categoryController.js';

const router = express.Router();

// Route to get all categories
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);
router.get('/:id/articles', getArticlesByCategoryId); // Get articles by specific category

export default router;