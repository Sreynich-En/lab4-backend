import express from 'express';
import {
    getAllJournalists,
    getJournalistById,
    createJournalist,
    updateJournalist,
    deleteJournalist,
    getArticlesByJournalistId
} from '../controllers/journalistController.js';

const router = express.Router();

// Route to get all journalists
router.get('/', getAllJournalists);
router.get('/:id', getJournalistById);
router.post('/', createJournalist);
router.put('/:id', updateJournalist);
router.delete('/:id', deleteJournalist);

router.get('/:id/articles', getArticlesByJournalistId); // Get articles by specific journalist

export default router;