import type { IProperty } from './enities/IProperty'
import type { Person } from './enities/Person'
import { TYPES } from './enities/types'
import type { PropertyBuilder } from './PropertyBuilder'
import { ValidateAddress, ValidateId, ValidateName, ValidationErrors } from './utils/ValidatePerson'
import { PERSON_TYPES } from './enities/Person.enum'
import { PropertyManager } from './enities/PropertyManager'
import { Owner } from './enities/Owner'
import { Guest } from './enities/Guest'
import 'reflect-metadata'
import { IPerson } from './enities/IPerson'
import { container } from './inversifyContainer'
import { IAddress } from './enities/IAddress'

export function createPersonInstance(
    person: PERSON_TYPES,
    name: string,
    id: number,
    address: {street: string, city: string, zip: number}
){
    validate(name, id, address)

    switch(person){
        case PERSON_TYPES.PropertyManager:
            return new PropertyManager(name, id, address)
        case PERSON_TYPES.Owner:
            return new Owner(name, id, address)
        case PERSON_TYPES.Guest:
            return new Guest(name, id, address)
    }
}

export function createPropertyInstance(
    id: number,
    name: string,
    description: string,
    address: IAddress,
){
    validate(name, id, address)
    const propertyBuilder = container.get<PropertyBuilder>(TYPES.PropertyBuilder)
    return propertyBuilder
        .setId(id)
        .setName(name)
        .setDescription(description)
        .setAddress(address)
        .build()
}

function validate(name: string, id: number, address: IAddress){
    const nameValidator = new ValidateName()
    const idValidator = new ValidateId()
    const addressValidator = new ValidateAddress()

    if(!nameValidator.validate(name)){
        throw new Error(ValidationErrors.Name)
    }

    if(!idValidator.validate(id)){
        throw new Error(ValidationErrors.Id)
    }

    if(!addressValidator.validate(address)){
        throw new Error(ValidationErrors.Address)
    }
}
// Fake person infos.
const person = container.get<IPerson>(TYPES.PersonFaker)
const propertyFaker = container.get<IProperty>(TYPES.PropertyFaker)

const unknownPerson = {
    name: 'Unknown',
    id: 0,
    address: {
        street: 'Unknown',
        city: 'Unknown',
        zip: 11111
    }
}
const unknownProperty: IProperty = {
    id: 0,
    name: 'Unknown',
    address: {
        street: 'Unknown',
        city: 'Unknown',
        zip: 11111
    },
    owner: unknownPerson,
    description: 'Empty Description'
}

let owner : IPerson
let property : IProperty

try{
    owner = createPersonInstance(
        PERSON_TYPES.Owner,
        person.name,
        person.id,
        person.address
    )
    container.bind<Person>(TYPES.Person).toConstantValue(owner)

    property = createPropertyInstance(
        propertyFaker.id,
        propertyFaker.name,
        propertyFaker.description,
        propertyFaker.address
    )
} catch(error){
    console.log(error)

    owner = unknownPerson
    property = unknownProperty
}

console.log('Property Owner name: ' + property.owner.name)
console.log(property)
console.log(owner.name)