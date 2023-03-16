import { Type } from "class-transformer";
import { HttpResponse } from "./http-response";

export enum AddressType {
    WORK = 'work',
    HOME = 'home',
    OTHER = 'other',
}

export class KaagazAddresses extends HttpResponse {
    @Type(() => KaagazAddress)
    data: KaagazAddress[];
}

export class KaagazAddress {
    addressId: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    type: AddressType;
    description: string;
    fullAddress: string;
    country: string;
    created: number;
    createdBy: string;
    createdByName: string;
    createdByRole: number;
    id: string;
    latitude: number;
    longitude: number;
    pincode: string;
    state: string;
    updated: number;
    updatedBy: string;
    updatedByName: string;
    updatedByRole: number;
    userId: string;
    version: number;
}
