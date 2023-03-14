export enum AddressType {
    WORK = 'work',
    HOME = 'home',
    OTHER = 'other',
}

export class KaagazAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    description: string;
    latitude: string;
    longitude: string;
    fullAddress: string;
    type: AddressType;
}
