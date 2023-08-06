export class CreatePropertyDto {
    constructor(
        readonly name: string,
        readonly deviceId: string,
        readonly value: string
    ) {}
}
