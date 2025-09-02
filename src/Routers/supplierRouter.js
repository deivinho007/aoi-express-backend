import express from 'express';
import createSupplierController from '../controller/supplier/createSupplierController.js';
import listSupplierController from '../controller/supplier/listSupplierController.js';
import getByIdSupplierController from '../controller/supplier/getByIdSupplierController.js';
import putByIdSupplierController from '../controller/supplier/putByIdSupplierController.js';
import deleteSupplierController from '../controller/supplier/deleteSupplierController.js';

const router = express.Router();

router.get('/', listSupplierController);
router.get('/:id', getByIdSupplierController);
router.post('/', createSupplierController);
router.put('/:id', putByIdSupplierController);
router.delete('/:id', deleteSupplierController);

export default router; 