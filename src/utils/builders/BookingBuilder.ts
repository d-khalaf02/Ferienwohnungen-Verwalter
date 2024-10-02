import { inject, injectable } from 'inversify'
import { Booking } from '../../enities/booking/booking'
import type { IPerson } from '../../enities/interfaces/IPerson'
import type { IProperty } from '../../enities/interfaces/IProperty'
import type { IService } from '../../enities/interfaces/IServices'
import { TYPES } from '../../inversify/types'

@injectable()
export class BookingBuilder{
    private id!: number
    private services!: IService[]
    private checkInDate!: Date
    private checkOutDate!: Date

    constructor(
        @inject(TYPES.Property) private property: IProperty,
        @inject(TYPES.Guests) private guests: IPerson[]
    ) {}

    setId(id: number){
        this.id = id
        return this
    }

    setServices(services: IService[]){
        this.services = services
        return this
    }

    setCheckInDate(date: Date){
        this.checkInDate = date
        return this
    }

    setCheckOutDate(date: Date){
        this.checkOutDate = date
        return this
    }

    build(){
        return new Booking(
            this.id,
            this.property,
            this.guests,
            this.services,
            this.checkInDate,
            this.checkOutDate
        )
    }
}