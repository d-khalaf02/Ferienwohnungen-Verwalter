import { inject, injectable } from 'inversify'
import { TYPES } from '../../inversify/types'
import type { IBooking } from '../interfaces/IBooking'
import type { IPerson } from '../interfaces/IPerson'
import type { IProperty } from '../interfaces/IProperty'
import type { IService } from '../interfaces/IServices'

@injectable()
export class Booking implements IBooking{
    id: number
    guests: IPerson[]
    property: IProperty
    services: IService[]
    checkInDate: Date
    checkOutDate: Date

    constructor(
        id: number,
        @inject(TYPES.Property) property: IProperty,
        @inject(TYPES.Guests) guests: IPerson[],
        services: IService[],
        checkInDate: Date,
        checkOutDate: Date
    ) {
        this.id = id
        this.guests = guests
        this.property = property
        this.services = services
        this.checkInDate = checkInDate
        this.checkOutDate = checkOutDate
    }
}