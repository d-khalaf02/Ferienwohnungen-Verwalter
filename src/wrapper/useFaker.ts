import { faker } from '@faker-js/faker'

export const useFaker = () => {
    const person = {
        fullName: () => faker.person.fullName()
    }

    const number = {
        bigInt: (options?: {min: number, max: number}) => {
            return Number(faker.number.bigInt(options))
        }
    }

    const location = {
        street: () => {
            return faker.location.street()
        },
        city: () => faker.location.city(),
        zipCode: (options? : string | {state?: string, format?: string}) => {
            return parseInt(faker.location.zipCode(options))
        }
    }

    const lorem = {
        text: () => {
            return faker.lorem.text()
        }
    }

    return {
        person,
        number,
        location,
        lorem
    }
}
