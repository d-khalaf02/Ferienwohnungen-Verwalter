import 'reflect-metadata'
import { describe, test, expect } from "vitest"
import { PropertyManager } from './PropertyManager'
import { IPerson } from '../interfaces/IPerson'
import { container } from '../../inversify/container'
import { TYPES } from '../../inversify/types'

const personDetails: IPerson = container.get<IPerson>(TYPES.PersonFaker)

describe('Guest', () => {
    test('should create an instance of Guest with valid PersonDetails', () => {
        // Arrange
        const sut = new PropertyManager(personDetails.name, personDetails.id, personDetails.address)
        // Act
        // Assert

        expect(sut).toHaveProperty('name')
        expect(sut).toHaveProperty('id')
        expect(sut).toHaveProperty('address')

        expect(sut.address).toHaveProperty('street')
        expect(sut.address).toHaveProperty('city')
        expect(sut.address).toHaveProperty('zip')
    })
})