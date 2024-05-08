import { Request, Response, query } from "express";
import prisma from "../models/prisma_model";

//AGREGAR A CARRITO
export const agregarAlCarrito= async(req: Request, res: Response): Promise<void> =>{
    const {userId, productId, quantity} = req.body;

    const producto = await fetch(`https://dummyjson.com/products/${productId}`).then(res => res.json())

    if(!producto.id){
        res.status(404).json({error: 'Producto no Encontrado'})
        return
    }

    const cartItem = await prisma.cartItem.create({
        data: {
            userId,
            productId,
            quantity,
        },
    })

    res.status(201).json(cartItem)
}

//ACTUALIZAR CANTIDAD DE ITEMS DE CARRITO
export const actualizarCantidad= async(req: Request, res: Response): Promise<void> =>{
    const {paramId} = req.params;
    const {quantity} = req.body;
    const cartItemId= Number(paramId)

    const cartItem = await prisma.cartItem.update({
        where: { id: cartItemId },
        data: { quantity },
    })

    res.status(200).json(cartItem)
}

//ELIMINAR UN ITEM DEL CARRITO
export const eliminarDelCarrito= async(req:Request, res:Response): Promise<void> => {
    const paramsId= req.params;
    const cartItemId= Number(paramsId)

    await prisma.cartItem.delete({
        where: {id: cartItemId}
    })

    res.status(200).json()
}

//OBTENER EL CARRITO DEL USUARIO
export const obtenerCarrito= async(req:Request, res:Response): Promise<void> =>{
    const queryId= req.query;
    const userId= Number(queryId);

    const cartItems = await prisma.cartItem.findMany({
        where: {userId},
    })
}