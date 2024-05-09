import dotenv from 'dotenv';
import express from 'express';
import productRoutes from './routes/product.routes'


//Configurar para uso de Variables de Entorno
dotenv.config()

const app= express()

app.use(express.json());

//Routes
app.use('/cart', productRoutes);



export default app