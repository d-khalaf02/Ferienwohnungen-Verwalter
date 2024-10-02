import 'reflect-metadata'
import { describe, expect, test } from 'vitest'
import { container } from '../../inversify/container'
import { TYPES } from '../../inversify/types'
import { mockBooking } from '../../utils/faker/mockBooking'
import { mockPerson } from '../../utils/faker/mockPerson'
import { mockProperty } from '../../utils/faker/mockProperty'
import { PERSON_TYPES } from '../enums/Person.enum'
import type { IPerson } from '../interfaces/IPerson'
import type { IProperty } from '../interfaces/IProperty'



describe('implementing a booking service ', () => {
    test('booking class should conatin id,propertyId,guestId, checkInDate, checkOutDate', () => {
        const owner = mockPerson(PERSON_TYPES.Owner);
        const propertyManager = mockPerson(PERSON_TYPES.PropertyManager)
        const guests = [mockPerson(PERSON_TYPES.Guest)]

        container.bind<IPerson>(TYPES.Owner).toConstantValue(owner)
        container.bind<IPerson>(TYPES.PropertyManager).toConstantValue(propertyManager)
        container.bind<IPerson[]>(TYPES.Guests).toConstantValue(guests)

        const property = mockProperty()
        container.bind<IProperty>(TYPES.Property).toConstantValue(property)

        const sut = mockBooking()

        // Assert
        expect(sut).toHaveProperty('id')
        expect(sut).toHaveProperty('property')
        expect(sut.property).toHaveProperty('name')
        expect(sut.property).toHaveProperty('id')
        expect(sut.property).toHaveProperty('description')

        expect(sut.property).toHaveProperty('address')
        expect(sut.property.address).toHaveProperty('street')
        expect(sut.property.address).toHaveProperty('zip')
        expect(sut.property.address).toHaveProperty('city')

        expect(sut.property).toHaveProperty('owner')
        expect(sut.property.owner).toHaveProperty('id')

        expect(sut.property).toHaveProperty('propertyManager')
        expect(sut.property.propertyManager).toHaveProperty('id')

        expect(sut).toHaveProperty('guests')
    })
})