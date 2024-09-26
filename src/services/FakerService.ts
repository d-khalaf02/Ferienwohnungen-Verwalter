import { injectable } from 'inversify';
import { es, faker, Faker } from '@faker-js/faker'
import { IPerson } from '../enities/IPerson'

@injectable()
export class FakerService {
    private faker: Faker;

    constructor(){
        this.faker = new Faker({
            locale: [es]
        });
    }

    getFakeDetails(): IPerson{
        return {
            name: this.faker.person.fullName(),
            id: Number(faker.phone.number({style: 'international'}).replace('+', '')),
            address: {
                street: this.faker.location.street(),
                city: this.faker.location.city(),
                zip: Number(faker.location.zipCode('#####'))
            }
        }
    }
}