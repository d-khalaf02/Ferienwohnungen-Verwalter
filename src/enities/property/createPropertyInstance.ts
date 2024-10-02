import { container } from '../../inversify/container'
import type { PropertyBuilder } from '../../utils/builders/PropertyBuilder'
import { Validator } from '../../utils/validation/Validator'
import { IAddress } from '../interfaces/IAddress'
import { TYPES } from '../../inversify/types'
import type { IAminities } from '../interfaces/IAminities'

export function createPropertyInstance(
    id: number,
    name: string,
    description: string,
    address: IAddress,
    aminities: IAminities[]
){
    Validator.validate(name, id, address)
    const propertyBuilder = container.get<PropertyBuilder>(TYPES.PropertyBuilder)

    return propertyBuilder
        .setId(id)
        .setName(name)
        .setDescription(description)
        .setAddress(address)
        .setAminities(aminities)
        .build()
}