import { describe, expect, test } from 'vitest'
import { container } from '../../ioc/container'
import { TYPES } from '../../ioc/types'
import { mockPerson } from '../../utils/faker/mockPerson'
import { mockProperty } from '../../utils/faker/mockProperty'
import { PERSON_TYPES } from '../enums/Person.enum'
import type { IBooking } from '../interfaces/IBooking'
import type { IPerson } from '../interfaces/IPerson'
import { Booking } from './booking'



describe('implementing a booking service ', () => {
    test('booking class should conatin id,propertyId,guestId, checkInDate, checkOutDate', () => {
        const faker = container.get<IBooking>(TYPES.BookingFaker)
        const owner = mockPerson(PERSON_TYPES.Owner);
        const propertyManager = mockPerson(PERSON_TYPES.PropertyManager)
        const guests = [mockPerson(PERSON_TYPES.Guest)]


        container.bind<IPerson>(TYPES.Owner).toConstantValue(owner)
        container.bind<IPerson>(TYPES.PropertyManager).toConstantValue(propertyManager)

        const property = mockProperty()
        const sut = new Booking(owner.id, property, guests, faker.checkInDate, faker.checkOutDate)

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

        expect(sut).toHaveProperty('guest')
    })
})