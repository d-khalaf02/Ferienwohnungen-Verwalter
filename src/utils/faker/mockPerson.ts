import { PERSON_TYPES } from '../../enities/enums/Person.enum'
import { IPerson } from '../../enities/interfaces/IPerson'
import { createPersonInstance } from '../../enities/persons/createPersonInstance'
import { container } from '../../inversify/container'
import { TYPES } from '../../inversify/types'

export function mockPerson(personType: PERSON_TYPES){
    const person = container.get<IPerson>(TYPES.PersonFaker)

    return createPersonInstance(
        personType,
        person.name,
        person.id,
        person.address
    )
}