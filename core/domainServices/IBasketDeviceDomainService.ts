import { BasketDevice } from '../domainModels/BasketDevice';
import { CreateBasketDeviceDto } from './dto/CreateBasketDeviceDto';
import { UpdateBasketDeviceDto } from './dto/UpdateBasketDeviceDto';

export interface IBasketDomainService {
    getByName(name: string): BasketDevice;
    create(dto: CreateBasketDeviceDto): BasketDevice;
    update(dto: UpdateBasketDeviceDto): BasketDevice | undefined;
    //undefined если последний удалили
    // getByName(name: string): unknown;
}