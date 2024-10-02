import 'reflect-metadata'
import { inject, injectable } from 'inversify'
import type { IAddress } from '../interfaces/IAddress'
import type { IAminities } from '../interfaces/IAminities'
import type { IPerson } from '../interfaces/IPerson'
import type { IProperty } from '../interfaces/IProperty'
import { TYPES } from '../../inversify/types'


@injectable()
export class Property implements IProperty{
    description: string
    id: number
    name: string
    address: IAddress

    aminities: IAminities[]

    owner: IPerson
    propertyManager: IPerson

    constructor(
        id: number,
        name: string,
        description: string,
        address: IAddress,
        aminities: IAminities[],
        @inject(TYPES.Owner) owner: IPerson,
        @inject(TYPES.PropertyManager) propertyManager: IPerson,
    ) {
        this.id = id
        this.name = name
        this.description = description
        this.address = address

        this.aminities = aminities

        this.owner = owner
        this.propertyManager = propertyManager
    }
}