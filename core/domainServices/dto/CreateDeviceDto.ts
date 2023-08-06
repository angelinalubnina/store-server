import { Color } from '../../domainModels/Color';
import { Property } from '../../domainModels/Property';

export class CreateDeviceDto {
    constructor(
        readonly name: string,
        readonly brandName: string,
        readonly typeName: string,
        readonly price: number,
        readonly images: string[] | undefined,
        readonly description: string,
        readonly availableColors: Color[],
        readonly properties: Property[],
    ) {}
}
