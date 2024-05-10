export interface IUser{
    id?: Number; 
    email: String;
    firstName: String;
    lastName: String;
    password: String;
}

export interface IJWT{
    id?: Number;
    email: String;
    password: String;
}

export interface ICartItem{
    id?: Number;
    quantity: Number;
    productId: Number;
    userId: Number;
}

export interface IOrder{
    id?: Number;
    userId: Number;
    total?: Number;
}

