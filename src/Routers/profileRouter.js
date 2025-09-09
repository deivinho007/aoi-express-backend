import express from 'express';
import { createProfileController } from '../controller/profile/createProfileController.js';
import { listProfileController } from '../controller/profile/listProfileController.js';
import { getByIdProfileController } from '../controller/profile/getByIdProfileController.js';
import { putByIdProfileController } from '../controller/profile/putByIdProfileController.js';
import { deleteProfileController } from '../controller/profile/deleteProfileController.js';

const router = express.Router();

router.get('/', listProfileController);
router.get('/:id', getByIdProfileController);
router.post('/', createProfileController);
router.put('/:id', putByIdProfileController);
router.delete('/:id', deleteProfileController);

export default router;
