import { Request, Response } from "express";

//AGREGAR A CARRITO
export const agregarAlCarrito= async(req: Request, res: Response): Promise<void> =>{
    const {userId, productId, quantity} = req.body;
 
    const producto = await fetch(`https://dummyjson.com/products/${productId}`).then(res => res.json())

    if(!producto.id){
        res.status(404).json({error: 'Producto no Encontrado'})
        return
    }

    const cartItem = await prisma.create
}