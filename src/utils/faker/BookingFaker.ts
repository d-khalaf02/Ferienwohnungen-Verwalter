import { injectable } from 'inversify'
import type { IBooking } from '../../enities/interfaces/IBooking'
import type { IPerson } from '../../enities/interfaces/IPerson'
import type { IProperty } from '../../enities/interfaces/IProperty'
import { useFaker } from '../../wrapper/useFaker'
import { mockProperty } from './mockProperty'
import { unknownPerson } from './PersonFaker'
import { unknownProperty } from './PropertyFaker'

const faker = useFaker()

@injectable()
export class BookingFaker implements IBooking{
    checkInDate: Date
    checkOutDate: Date
    guests: IPerson[]
    id: number
    property: IProperty

    constructor() {
        this.id = faker.number.bigInt({min: 1000000000, max: 9999999999})
        this.checkInDate = faker.date.past()
        this.checkOutDate = faker.date.soon()
        try{
            this.property = mockProperty()
            this.guests = [mockProperty()]
        }catch(error){
            console.log(error)
            this.property = unknownProperty
            this.guests = [unknownPerson]
        }
    }
}

export const emptyBooking = {
    id: 0,
    checkInDate: faker.date.past(),
    checkOutDate: faker.date.soon(),
    property: unknownProperty,
    guests: [unknownPerson]
}