import { Color } from './Color';
import { Device } from './Device';
import { User } from './User';

export class BasketDevice {
    constructor(
        readonly id: string,
        // readonly user: User,
        readonly email: string,
        // readonly device: Device,
        readonly deviceName: string,
        readonly amount: number,
        readonly selectedColor: Color,
    ){}
}