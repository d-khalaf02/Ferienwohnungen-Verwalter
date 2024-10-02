import { inject, injectable } from 'inversify'
import type { IAddress } from '../../enities/interfaces/IAddress'
import type { IPerson } from '../../enities/interfaces/IPerson'
import type { IAminities, IProperty } from '../../enities/interfaces/IProperty'
import { Property } from '../../enities/property/Property'
import { TYPES } from '../../inversify/types'

@injectable()
export class PropertyBuilder{
    private id!: number
    private address!: IAddress
    private description!: string
    private name!: string
    private aminities!: IAminities[]

    constructor(
        @inject(TYPES.Owner) private owner: IPerson,
        @inject(TYPES.PropertyManager) private propertyManager: IPerson,
    ) {}

    setId(id: number): this{
        this.id = id
        return this
    }

    setName(name: string): this{
        this.name = name
        return this
    }

    setAminities(aminities: IAminities[]){
        this.aminities = aminities
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
        return new Property(
            this.id,
            this.name,
            this.description,
            this.address,
            this.aminities,
            this.owner,
            this.propertyManager,
        )
    }
}