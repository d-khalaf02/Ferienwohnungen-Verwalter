import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import type { IAddress } from './IAddress'
import type { IProperty } from './IProperty'
import type { Person } from './Person'
import { TYPES } from './types'


@injectable()
export class Property implements IProperty{
    description: string
    id: number
    name: string
    owner: Person
    address: IAddress

    constructor(id: number, name: string, description: string, address: IAddress, @inject(TYPES.Person) owner: Person) {
        this.id = id
        this.name = name
        this.owner = owner
        this.description = description
        this.address = address
    }
}