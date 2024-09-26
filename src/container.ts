import { Container } from 'inversify';
import { FakerService } from './services/FakerService';
import { Owner } from './enities/Owner';
import { TYPES } from './enities/types';
import { es } from '@faker-js/faker'

const container = new Container();

container.bind<FakerService>(TYPES.Faker).toDynamicValue(() => new FakerService());

container.bind<Owner>(TYPES.Owner).to(Owner)

export { container }