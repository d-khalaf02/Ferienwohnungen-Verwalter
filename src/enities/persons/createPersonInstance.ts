import { Validator } from '../../utils/validation/Validator'
import { PERSON_TYPES } from '../enums/Person.enum'
import { IAddress } from '../interfaces/IAddress'
import { Guest } from './Guest'
import { Owner } from './Owner'
import { PropertyManager } from './PropertyManager'

export function createPersonInstance(
    person: PERSON_TYPES,
    name: string,
    id: number,
    address: IAddress
){
    Validator.validate(name, id, address)

    switch(person){
        case PERSON_TYPES.PropertyManager:
            return new PropertyManager(name, id, address)
        case PERSON_TYPES.Owner:
            return new Owner(name, id, address)
        case PERSON_TYPES.Guest:
            return new Guest(name, id, address)
    }
}