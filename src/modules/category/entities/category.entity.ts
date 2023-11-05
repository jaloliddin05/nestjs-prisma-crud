import { SubCategory } from "src/modules/sub-category/entities/sub-category.entity"

export class Category {
    id:string
    title:string
    subCategories:SubCategory[]
}
