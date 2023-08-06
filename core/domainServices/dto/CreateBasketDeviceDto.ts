export class CreateBasketDeviceDto {
    constructor(
        readonly deviceName: string,
        readonly userEmail: string
    ) {}
}
