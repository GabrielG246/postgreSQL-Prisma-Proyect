import dotenv from 'dotenv';
import express from 'express';


//Configurar para uso de Variables de Entorno
dotenv.config()

const app= express()

app.use(express.json());

//Routes



export default app