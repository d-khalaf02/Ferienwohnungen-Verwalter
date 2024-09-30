import { IProperty } from '../../enities/interfaces/IProperty'
import { createPropertyInstance } from '../../enities/property/createPropertyInstance'
import { container } from '../../ioc/container'
import { TYPES } from '../../ioc/types'


export function mockProperty(){
    const propertyFaker = container.get<IProperty>(TYPES.PropertyFaker)
    return createPropertyInstance(
        propertyFaker.id,
        propertyFaker.name,
        propertyFaker.description,
        propertyFaker.address,
        propertyFaker.aminities
    )
}