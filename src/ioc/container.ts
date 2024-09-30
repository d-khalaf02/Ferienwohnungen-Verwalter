import { Container } from 'inversify'
import type { IBooking } from '../enities/interfaces/IBooking'
import { IPerson } from '../enities/interfaces/IPerson'
import { IProperty } from '../enities/interfaces/IProperty'
import { BookingBuilder } from '../utils/builders/BookingBuilder'
import { BookingFaker } from '../utils/faker/BookingFaker'
import { TYPES } from './types'
import { PersonFaker } from '../utils/faker/PersonFaker'
import { PropertyBuilder } from '../utils/builders/PropertyBuilder'
import { PropertyFaker } from '../utils/faker/PropertyFaker'

const container = new Container()
container.bind<IPerson>(TYPES.PersonFaker).to(PersonFaker)
container.bind<IProperty>(TYPES.PropertyFaker).to(PropertyFaker)
container.bind<IBooking>(TYPES.BookingFaker).to(BookingFaker)

container.bind<PropertyBuilder>(TYPES.PropertyBuilder).to(PropertyBuilder)
container.bind<BookingBuilder>(TYPES.BookingBuilder).to(BookingBuilder)

export { container }