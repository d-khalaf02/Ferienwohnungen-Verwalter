import { describe, expect, test } from 'vitest'
import { TYPES } from './enities/types'
import { createPersonInstance } from './index'
import { IPerson } from './enities/IPerson'

import { PERSON_TYPES } from './enities/Person.enum'
import { container } from './inversifyContainer'

const personDetails: IPerson[] = [
    container.get<IPerson>(TYPES.PersonFaker),
    container.get<IPerson>(TYPES.PersonFaker),
    container.get<IPerson>(TYPES.PersonFaker),
]

describe('Verwalter', () => {
    test.each(
        personDetails
    )('should initiliaze a Person with valid PersonDetails ($name, $id, $address)', ({ name, id, address}) => {
        name = name.replace('\\', '')
            .replace('\'', '')
            .replace('-', '')

        address.street = address.street
            .replace('\\', '')
            .replace('\'', '')
            .replace('-', '')

        address.street = address.street.replace('\\', '')
        address.city = address.city.replace('\\', '')

        console.log('name: ' + name)
        console.log('street:' + address.street)
        console.log('city:' + address.city)
        console.log('zip:' + address.zip)
        let sut: IPerson = createPersonInstance(PERSON_TYPES.Owner, name, id, address)

        expect(sut).toHaveProperty('name');
        expect(sut).toHaveProperty('id');
        expect(sut).toHaveProperty('address');
    })
})