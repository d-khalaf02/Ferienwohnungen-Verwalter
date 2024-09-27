import type { IAddress } from './IAddress'
import type { Person } from './Person'

export interface IProperty {
    id: number
    name: string
    description: string
    owner: Person
    address: IAddress
}