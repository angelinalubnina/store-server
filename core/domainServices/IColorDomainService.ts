import { Color } from '../domainModels/Color';
import { CreateColorDto } from './dto/CreateColorDto';

export interface IColorDomainService {
    create(dto: CreateColorDto): Color;
    getAll(): Color[]
    // getColorsByDeviceName(deviceName: string): [Color];
}