import { Container } from 'inversify'
import { IPerson } from './enities/IPerson'
import { IProperty } from './enities/IProperty'
import { TYPES } from './enities/types'
import { PersonFaker } from './PersonFaker'
import { PropertyBuilder } from './PropertyBuilder'
import { PropertyFaker } from './PropertyFaker'

const container = new Container()
container.bind<IPerson>(TYPES.PersonFaker).to(PersonFaker)
container.bind<IProperty>(TYPES.PropertyFaker).to(PropertyFaker)
container.bind<PropertyBuilder>(TYPES.PropertyBuilder).to(PropertyBuilder)

export { container }