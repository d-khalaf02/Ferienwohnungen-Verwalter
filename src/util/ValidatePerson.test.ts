import { describe, test, expect } from 'vitest';
import { ValidateAddress, ValidateId, ValidateName } from './ValidatePerson'

describe('Validate Person Details', () => {
    const namesScinarios = [
        {name: "DiyarKhalaf", expected: false, explaintation: "Because it dose not contain a space"},
        {name: "Diyar Khalaf", expected: true, explaintation: "Because it contains a space and it's length is >6 && <= 40"},
        {name: "Diyar Khalaf2", expected: false, explaintation: "Because it contains Digit"},
        {name: "Diyar Khalaf@", expected: false, explaintation: "Because it contains symbol"},
        {name: "d k", expected: true, explaintation: "Because it's length is >1"},
        {name: "Diyar KhalafDiyar KhalafDiyar KhalafDiyar KhalafDiyar KhalafDiyar Khalaf", expected: false, explaintation: "Because it's length is >40"},
    ];

    const idScinarios = [
        {id: 123456789, expected: true, explaintation: "Because it is 7-16 digits"},
        {id: 123456789.7, expected: false, explaintation: "Because it is 7-16 digits"},
        {id: 12345, expected: false, explaintation: "Because it is less than 7 digits"},
        {id: 12345123451234512345, expected: false, explaintation: "Because it is greater than 16 digits"},
    ];

    const addressScinarios = [
        {
            address: {street: "steert 1", city: "Verden", zip: 27283},
            expected: false,
        },
        {
            address: {street: "TS", city: "Verden", zip: 27283},
            expected: true,
        },
        {
            address: {street: "steert", city: "Verden", zip: 272333},
            expected: false,
        },
        {
            address: {street: "steert", city: "Ver den", zip: 27383},
            expected: true,
        },
        {
            address: {street: "steert", city: "Ver den", zip: 2733},
            expected: false,
        },

    ]

    test.each(namesScinarios)
    ('$name should be $expected: $explaintation', ({name, expected}) => {
        // Arrange
        const sut = new ValidateName();
        // Act
        const nameIsValid = sut.validate(name);

        // Assert
        expect(nameIsValid).toBe(expected)
    })

    test.each(idScinarios)
    ('$id should be $expected: $explaintation', ({id, expected}) => {
        // Arrange
        const sut = new ValidateId()

        // Act
        const act = sut.validate(id);

        // Assert
        expect(act).toBe(expected);
    })

    test.each(addressScinarios)
    ('$address should be $expected', ({address, expected}) => {
        // Arrange
        const sut = new ValidateAddress();

        // Act
        const act = sut.validate(address);

        // Assert
        expect(act).toBe(expected)
    })
})