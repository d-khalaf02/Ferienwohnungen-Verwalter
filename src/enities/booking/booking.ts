import { inject, injectable } from 'inversify'
import { TYPES } from '../../ioc/types'
import type { IBooking } from '../interfaces/IBooking'
import type { IPerson } from '../interfaces/IPerson'
import type { IProperty } from '../interfaces/IProperty'

@injectable()
export class Booking implements IBooking{
    id: number
    guests: IPerson[]
    property: IProperty
    checkInDate: Date
    checkOutDate: Date

    constructor(
        id: number,
        @inject(TYPES.Property) property: IProperty,
        @inject(TYPES.Guests) guests: IPerson[],
        checkInDate: Date,
        checkOutDate: Date
    ) {
        this.id = id
        this.guests = guests
        this.property = property
        this.checkInDate = checkInDate
        this.checkOutDate = checkOutDate
    }
}