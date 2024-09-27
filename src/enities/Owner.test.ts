import 'reflect-metadata';
import { describe, test, expect } from "vitest";
import { Owner } from './Owner';
import { IPerson } from './IPerson';
import { container } from '../inversifyContainer';
import { TYPES } from './types'

const person = container.get<IPerson>(TYPES.PersonFaker)

describe('Owner', () => {
    test('should create an instance of Owner with valid PersonDetails', () => {
        // Arrange
        const sut = new Owner(person.name, person.id, person.address)
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