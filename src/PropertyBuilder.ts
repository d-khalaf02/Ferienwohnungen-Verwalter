import { inject, injectable } from 'inversify'
import type { IAddress } from './enities/IAddress'
import type { IProperty } from './enities/IProperty'
import type { Person } from './enities/Person'
import { Property } from './enities/Property'
import { TYPES } from './enities/types'

@injectable()
export class PropertyBuilder{
    private id!: number
    private address!: IAddress
    private description!: string
    private name!: string

    constructor(@inject(TYPES.Person) private owner: Person) {}

    setId(id: number): this{
        this.id = id
        return this
    }

    setName(name: string): this{
        this.name = name
        return this
    }

    setDescription(desc: string): this{
        this.description = desc
        return this
    }

    setAddress(address: IAddress): this{
        this.address = address
        return this
    }

    build() : IProperty{
        return new Property(this.id, this.name, this.description, this.address, this.owner)
    }
}