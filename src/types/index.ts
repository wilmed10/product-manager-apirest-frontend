import { object, string, number, boolean, InferOutput, array, union } from 'valibot'

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: union([number(), string()]),
    availability: boolean()
})
export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema>