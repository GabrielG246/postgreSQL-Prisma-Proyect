import {agregarAlCarrito, actualizarCantidad, eliminarDelCarrito, obtenerCarrito} from '../controllers/product_controller'
import express from 'express';

const router= express.Router();

//Rutas
router.post('/add', agregarAlCarrito);
router.patch('/:cartItemId', actualizarCantidad);
router.delete('/:cartItemId', eliminarDelCarrito);
router.get('/?id', obtenerCarrito);

export default router