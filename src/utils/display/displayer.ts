import { PERSON_TYPES } from '../../enities/enums/Person.enum'
import type { IAddress } from '../../enities/interfaces/IAddress'
import type { IPerson } from '../../enities/interfaces/IPerson'
import type { IAminities, IProperty } from '../../enities/interfaces/IProperty'

export class Displayer{
    static property(_property: IProperty){
        console.log(`Property's ID: ${_property.id}`)
        console.log(`Property's Name: ${_property.name}`)
        console.log(`Property's Description: ${_property.description}`)
        console.log(`Property's Address: ${this.address(_property.address)}`)
        console.log(`Property's Aminities: ${this.aminities(_property.aminities)}`)

        this.person(PERSON_TYPES.Owner, _property.owner)
        this.person(PERSON_TYPES.PropertyManager, _property.propertyManager)
    }

    static guests(_guests: IPerson[]){
        _guests.forEach((person, index) => {
            console.log(`Guest (${index+1})`)
            this.person(PERSON_TYPES.Guest, person)
        })
    }

    static person(personType: PERSON_TYPES, _person: IPerson){
        console.log(`Property ${personType}'s ID: ${_person.id}`)
        console.log(`Property ${personType}'s Name: ${_person.name}`)
        console.log(`Property ${personType}'s Address: ${this.address(_person.address)}`)
    }

    static address(_address: IAddress){
        return `${_address.street}, ${_address.zip} ${_address.city}`
    }

    static aminities(_aminities: IAminities[]){
        let text = ''
        _aminities.forEach((aminitiy) => {
            text += `
            ${aminitiy.name} is ${aminitiy.available? 'available': 'not avaliable'}
            `
        })
        return text
    }
}