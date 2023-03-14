import { Type } from "class-transformer";
import { HttpResponse } from "./http-response";

export class UserRes extends HttpResponse {
    @Type(() => User)
    data: User;
}

export class User {
    createdAt: string;
    loginToken: string;
    name: string;
    phoneNumber: string;
    role: number;
    updatedAt: string;
    userId: number
    image: string;
    emailId: string;
}