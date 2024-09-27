import { injectable } from 'inversify'
import { IPerson } from './enities/IPerson'
import { useFaker } from './wrapper/useFaker'
const faker = useFaker()

@injectable()
export class PersonFaker implements IPerson {
    name: string
    id: number
    address: {street: string, city: string, zip: number}

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