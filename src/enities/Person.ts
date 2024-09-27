import { IPerson } from './IPerson'
import { IAddress } from './IAddress'
export abstract class Person implements IPerson{
    name: string
    id: number
    address: IAddress

    constructor(name: string, id: number, address: IAddress) {
        this.name = name
        this.id = id
        this.address = address
    }
}