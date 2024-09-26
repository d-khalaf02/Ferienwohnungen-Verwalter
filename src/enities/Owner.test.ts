import { describe, test, expect } from "vitest";
import { Owner } from './Owner'
import { IPerson } from './IPerson'

const personDetails: IPerson = {
    name: "Diyar Khalaf",
    id: 10239801234,
    address: {
        street: "Niedersachsenring",
        city: "Verden",
        zip: 27283,
    }
}

describe('Owner', () => {
    test('should create an instance of Owner with valid PersonDetails', () => {
        // Arrange
        const sut = new Owner(personDetails.name, personDetails.id, personDetails.address);
        // Act
        // Assert

        expect(sut).toHaveProperty('name');
        expect(sut).toHaveProperty('id');
        expect(sut).toHaveProperty('address');

        expect(sut.address).toHaveProperty('street');
        expect(sut.address).toHaveProperty('city');
        expect(sut.address).toHaveProperty('zip');
    })
})