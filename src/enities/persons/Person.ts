import { IPerson } from '../interfaces/IPerson'
import { IAddress } from '../interfaces/IAddress'
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