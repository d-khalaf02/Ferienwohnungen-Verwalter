import 'reflect-metadata';
import { describe, test, expect } from "vitest";
import { Guest } from './Guest'
import { IPerson } from './IPerson'
import { container } from '../inversifyContainer'
import { TYPES } from './types'

const personDetails: IPerson = container.get<IPerson>(TYPES.PersonFaker)

describe('Guest', () => {
    test('should create an instance of Guest with valid PersonDetails', () => {
        // Arrange
        const sut = new Guest(personDetails.name, personDetails.id, personDetails.address);
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