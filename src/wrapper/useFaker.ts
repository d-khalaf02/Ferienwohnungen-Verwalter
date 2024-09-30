import { faker, SexType } from '@faker-js/faker'

export const useFaker = () => {
    const person = {
        fullName: () => faker.person.fullName(),
        firstName: (sex?: SexType) => faker.person.firstName(sex)
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

    const company = {
        name: () => faker.company.name()
    }

    const date = {
        past: (options?: {years?: number, refDate?: string | Date | number}) => {
            return faker.date.past(options)
        },
        soon: (options?: {days?: number, refDate?: string | Date | number}) => {
            return faker.date.soon(options)
        }
    }
    const lorem = {
        text: () => {
            return faker.lorem.text()
        },

        paragraph: (sentenceCount?: number | {min: number, max: number}) => {
            return faker.lorem.paragraph(sentenceCount)
        }
    }

    return {
        person,
        number,
        location,
        company,
        date,
        lorem
    }
}
