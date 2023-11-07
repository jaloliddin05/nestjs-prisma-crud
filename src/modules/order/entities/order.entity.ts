import { Product } from "src/modules/product/entities/product.entity"

export class Order {
    id:string
    name:string
    phone:string
    count:number
    product:Product
    productId:string
}
