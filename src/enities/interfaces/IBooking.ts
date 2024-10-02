import type { IPerson } from './IPerson'
import type { IProperty } from './IProperty'
import type { IService } from './IServices'

export interface IBooking{
    id: number
    property: IProperty
    guests: IPerson[]
    services: IService[]
    checkInDate: Date
    checkOutDate: Date
}