import { describe, expect, test } from 'vitest'
import { createPersonInstance } from './index'
import { faker } from '@faker-js/faker'
import { IPerson } from './enities/IPerson'

import { PERSON_TYPES } from './enities/Person.enum'

const personDetails: IPerson[] = [
    {
        name: faker.person.fullName(),
        id: Number(faker.phone.number({style: 'international'}).replace('+', '')),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            zip: Number(faker.location.zipCode('#####')),
        }
    },
    {
        name: faker.person.fullName(),
        id: Number(faker.phone.number({style: 'international'}).replace('+', '')),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            zip: Number(faker.location.zipCode('#####')),
        }
    },
    {
        name: faker.person.fullName(),
        id: Number(faker.phone.number({style: 'international'}).replace('+', '')),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            zip: Number(faker.location.zipCode('#####')),
        }
    },
]

describe('Verwalter', () => {
    test.each(personDetails)('should initiliaze a Person with valid PersonDetails ($name, $id, $address)', ({ name, id, address}) => {
        const sut = createPersonInstance(PERSON_TYPES.Owner, name, id, address);

        expect(sut).toHaveProperty('name');
        expect(sut).toHaveProperty('id');
        expect(sut).toHaveProperty('address');

    })
})