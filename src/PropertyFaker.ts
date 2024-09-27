import { injectable } from 'inversify'
import type { IAddress } from './enities/IAddress'
import type { IProperty } from './enities/IProperty'
import type { Person } from './enities/Person'
import { useFaker } from './wrapper/useFaker'

const faker = useFaker()

@injectable()
export class PropertyFaker implements IProperty{
    address: IAddress
    description: string
    id: number
    name: string
    owner: Person

    constructor(){
        this.address = this.createAddress()

        this.description = faker.lorem.text()
        this.id = faker.number.bigInt({min: 1000000000, max: 9999999999})
        this.name = faker.person.fullName()

        this.owner = {
            address: this.createAddress(),
            id: faker.number.bigInt({min: 1000000000, max: 9999999999}),
            name: faker.person.fullName()
        }
    }

    private createAddress(){
        return {
            city: faker.location.city(),
            street: faker.location.street(),
            zip: faker.location.zipCode('#####')
        }
    }

}