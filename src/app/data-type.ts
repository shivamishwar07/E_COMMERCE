export interface Signup{
    name:string,
    email:string,
    password:string
}
export interface Login{
    email:string,
    password:string
}
export interface product{
    name:string,
    price:number,
    color:string,
    desc:string,
    category:string,
    image:string,
    id:number|any,
    quantity:undefined|number
}
export interface cart{
    name:string,
    price:number,
    color:string,
    desc:string,
    category:string,
    image:string,
    id:number |undefined,
    userId:number,
    productId:undefined|number,
    quantity:undefined|number
}