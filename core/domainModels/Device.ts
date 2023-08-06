import { Color } from './Color';
import { Property } from './Property';

export class Device {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly brandName: string,
        readonly typeName: string,
        readonly price: number,
        readonly rating: number,
        readonly images: string[],
        readonly description: string,
        readonly availableColors: Color[],
        readonly properties: Property[]
    ){}
}