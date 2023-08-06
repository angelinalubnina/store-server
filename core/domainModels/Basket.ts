import { BasketDevice } from './BasketDevice';
import { Color } from './Color';
import { Device } from './Device';
import { User } from './User';

export class Basket {
    constructor(
        readonly email: string,
        readonly cost: number,
        readonly basketDevices: BasketDevice[]
        // readonly user: User,
        // readonly device: Device,
    ){}
}