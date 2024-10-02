export interface IService{
    name: string
    description: string
    price?: number

    itemslist?: string[]
    deliveryTime?: string
    menu?: string[],
    pickupTime?: string
    issueTypes?: string[]
    pets?: string[]
}