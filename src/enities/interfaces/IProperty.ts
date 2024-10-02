import type { IAddress } from './IAddress'
import type { IAminities } from './IAminities'
import type { IPerson } from './IPerson'



export interface IProperty {
    id: number
    name: string
    description: string
    address: IAddress
    aminities: IAminities[]

    owner: IPerson
    propertyManager: IPerson
}