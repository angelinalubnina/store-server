export class UpdateBasketDeviceDto {
    constructor(
        readonly difference : number,
        readonly deviceName: string,
        readonly userEmail: string
    ) {}
}
