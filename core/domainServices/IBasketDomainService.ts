import { BasketDevice } from '../domainModels/BasketDevice';

export interface IBasketDomainService {
    getByName(name: string): BasketDevice[];
}