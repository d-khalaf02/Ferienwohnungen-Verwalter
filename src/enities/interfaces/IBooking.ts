import type { IPerson } from './IPerson'
import type { IProperty } from './IProperty'

export interface IBooking{
    id: number
    property: IProperty
    guests: IPerson[]
    checkInDate: Date
    checkOutDate: Date
}