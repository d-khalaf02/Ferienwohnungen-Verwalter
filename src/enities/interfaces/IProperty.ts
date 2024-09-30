import type { IAddress } from './IAddress'
import type { IPerson } from './IPerson'

export interface IAminities{
    name: string,
    available: boolean,
    extraCost?: number
}

export interface IProperty {
    id: number
    name: string
    description: string
    address: IAddress
    aminities: IAminities[]

    owner: IPerson
    propertyManager: IPerson
}