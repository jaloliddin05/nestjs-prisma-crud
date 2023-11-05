import { Order } from "src/modules/order/entities/order.entity";
import { SubCategory } from "src/modules/sub-category/entities/sub-category.entity";
export class Product {
  id: string;
  name: string;
  imgUrl: string;
  price: number;
  subCategory:SubCategory
  subCategoryId:string
}
