import { faker } from '@faker-js/faker';
import { ValidateAddress, ValidateId, ValidateName, ValidationErrors } from './util/ValidatePerson';
import { PERSON_TYPES } from './enities/Person.enum'
import { PropertyManager } from './enities/PropertyManager'
import { Owner } from './enities/Owner'
import { Guest } from './enities/Guest'

export function createPersonInstance(
    person: PERSON_TYPES,
    name: string,
    id: number,
    address: {street: string, city: string, zip: number}
){
    const nameValidator = new ValidateName();
    const idValidator = new ValidateId();
    const addressValidator = new ValidateAddress();

    if(!nameValidator.validate(name)){
        throw new Error(ValidationErrors.Name);
    }

    if(!idValidator.validate(id)){
        throw new Error(ValidationErrors.Id);
    }

    if(!addressValidator.validate(address)){
        throw new Error(ValidationErrors.Address);
    }

    switch(person){
        case PERSON_TYPES.PropertyManager: return new PropertyManager(name, id, address);
        case PERSON_TYPES.Owner: return new Owner(name, id, address);
        case PERSON_TYPES.Guest: return new Guest(name, id, address);
    }
}

// Fake person infos.
const name = faker.person.fullName();
const id = Number(faker.phone.number({style: 'international'}).replace('+', ''));
const address = {
    street: faker.location.street(),
    city: faker.location.city(),
    zip: Number(faker.location.zipCode('#####'))
}

let propertyManager : PropertyManager = {
    name: '',
    id: 0,
    address: {
        street: '',
        city: '',
        zip: 11111
    }
};

try{
    propertyManager = createPersonInstance(
        PERSON_TYPES.PropertyManager,
        name,
        id,
        address
    )
} catch(error){
    console.log(error);

    console.log('Name: '+ name);
    console.log('id: '+ id);
    console.log('address: '+ address.street + ', ' + address.city + ', ' + address.zip);
}

console.log(propertyManager.name)