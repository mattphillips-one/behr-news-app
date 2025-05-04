import { Router } from 'express';
import { SearchController } from '../controllers/searchController.js';

const router = Router();

router.get('/', SearchController.search);

export default router;