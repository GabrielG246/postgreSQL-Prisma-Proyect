import {agregarAlCarrito, actualizarCantidad, eliminarDelCarrito, obtenerCarrito} from '../controllers/product_controller'
import express from 'express';

const router= express.Router();

//Rutas
router.post('/cart', agregarAlCarrito);
router.patch('/cart/:cartItemId', actualizarCantidad);
router.delete('/')



