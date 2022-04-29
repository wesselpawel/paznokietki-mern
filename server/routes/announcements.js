import express from 'express';

import { getAnnouncements, createAnnouncement, deleteAnnouncement } from '../controllers/announcements.js';

const router = express.Router();

// localhost:5000/announcements
router.get('/', getAnnouncements);
router.post('/', createAnnouncement);
router.delete('/:id', deleteAnnouncement);

export default router;