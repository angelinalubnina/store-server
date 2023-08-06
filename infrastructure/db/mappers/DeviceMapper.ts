import { Color } from "../../../core/domainModels/Color";
import { Device } from "../../../core/domainModels/Device";
import { Property } from "../../../core/domainModels/Property";
import ColorModel from '../../../models/color'
import ProperyDeviceModel from '../../../models/propertyDevice'
import BrandModel from '../../../models/brand'
import TypeModel from '../../../models/type'
import { DeviceDocument } from "./DeviceDocument";

export class DeviceMapper {
    public static async toDomainModel(dbDevice: DeviceDocument): Promise<Device> {
        const colors: Color[] = [];
        for (const colorId of dbDevice.availableColors) {
            const color: Color | null = await ColorModel.findById(colorId);
            if (color != null){
                colors.push(color);
            }
        }
        const properties: Property[] = await ProperyDeviceModel.find({deviceId: dbDevice._id})

        const brand= await BrandModel.findById(dbDevice.brand)
        let brandName: string = "";
        if (brand != null){
            brandName = brand.name
        }

        const type= await TypeModel.findById(dbDevice.type)
        let typeName: string = "";
        if (type != null){
            typeName = type.name
        }

        const device = new Device(
            dbDevice._id,
            dbDevice.name,
            brandName,
            typeName,
            dbDevice.price,
            dbDevice.rating,
            dbDevice.images,
            dbDevice.description,
            colors,
            properties
        );
        return device;
    }
}