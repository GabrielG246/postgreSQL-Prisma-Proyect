import { IJWT } from "../models/controller_interfaces";
import jwt from "jsonwebtoken";

const JWT_SECRET= process.env.JWT_SECRET || "defaultSecretJWT";

export const generateToken= (user: IJWT): string =>{
    return jwt.sign({id: user.id, email: user.email}, JWT_SECRET, {expiresIn: "1h"})
}