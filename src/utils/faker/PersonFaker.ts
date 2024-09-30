import 'reflect-metadata'
import { injectable } from 'inversify'
import type { IAddress } from '../../enities/interfaces/IAddress'
import { IPerson } from '../../enities/interfaces/IPerson'
import { useFaker } from '../../wrapper/useFaker'
const faker = useFaker()

@injectable()
export class PersonFaker implements IPerson {
    name: string
    id: number
    address: IAddress

    constructor(){
        this.name = faker.person.fullName()
        this.id = faker.number.bigInt({min: 1000000000, max: 9999999999})
        this.address = {
            street: faker.location.street(),
            city: faker.location.city(),
            zip: faker.location.zipCode('#####')
        }
    }
}

export const unknownPerson = {
    name: '',
    id: 0,
    address: {
        street: '',
        city: '',
        zip: 11111
    }
}