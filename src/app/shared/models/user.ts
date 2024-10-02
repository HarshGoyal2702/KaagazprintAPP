import { Type } from "class-transformer";
import { HttpResponse } from "./http-response";

export class KaagazUserRes extends HttpResponse {
    @Type(() => KaagazUser)
    data: KaagazUser;
}

export class KaagazUser {
    createdAt: string;
    loginToken: string;
    name: string;
    phoneNumber: string;
    role: "CUSTOMER";
    updatedAt: string;
    userId: string;
    image: string;
    emailId: string;
    gender : string;
}