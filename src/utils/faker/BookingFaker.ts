import { injectable } from 'inversify'
import type { IBooking } from '../../enities/interfaces/IBooking'
import type { IPerson } from '../../enities/interfaces/IPerson'
import type { IProperty } from '../../enities/interfaces/IProperty'
import type { IService } from '../../enities/interfaces/IServices'
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
    services: IService[]
    id: number
    property: IProperty

    constructor() {
        this.id = faker.number.bigInt({min: 1000000000, max: 9999999999})
        this.checkInDate = faker.date.past()
        this.checkOutDate = faker.date.soon()
        this.services = [
            {
                name: 'Daliy Housekeeping',
                description: 'Daily cleaning of the apartment including towel and bed linen replacement.',
                price: 50
            },
            {
                name: 'Airport Pickup',
                description: 'Pickup from the airport to the apartment.',
                price: 30
            },
            {
                name: "Grocery Delivery",
                description: "Order groceries to be delivered to your apartment.",
                price: 15,
                itemslist: ["Milk", "Eggs", "Bread", "Cheese"],
                deliveryTime: "09:00 AM"
            },
            {
                name: 'Pet Sitting',
                description: 'Pet sitting service for your cats and dogs.',
                price: 40,
                pets: ['Dog', 'Cat']
            },
            {
                name: 'Maintaince Request',
                description: 'Maintaince service for your apartment',
                issueTypes: ['Plumping', 'Electrical', 'Heating']
            }
        ]
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
    services: {},
    property: unknownProperty,
    guests: [unknownPerson]
}