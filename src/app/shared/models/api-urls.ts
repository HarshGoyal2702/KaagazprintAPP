import { environment } from "src/environments/environment.prod";

export const APIURLS = {

    /** LOGIN */
    GENERATE_OTP_BY_PHONE_NUMBER: environment.baseUrl + 'users/generateOTP',
    VERIFY_OTP: environment.baseUrl + 'users/validateOTP',

    /** ORDER */
    SAVE_ORDER: environment.baseUrl + 'orders/add',
    SAVED_ORDERS: environment.baseUrl + 'orders/addAll',
    DELETE_ORDER: environment.baseUrl + 'orders/delete',
    ORDER: environment.baseUrl + 'orders/getById',

    /** UPLOAD FILE */
    UPLOAD_FILE: environment.baseUrl + 'fileController/upload',

    /** ADDRESS */
    SAVE_ADDRESS: environment.baseUrl + 'addresss/add',
    DELETE_ADDRESS: environment.baseUrl + 'addresss/delete',
    SAVED_ADDRESSES: environment.baseUrl + 'addresss/getAll',
    ADDRESS_BY_ID: environment.baseUrl + 'addresss/getById',

    /** USER USER */
    SAVE_USER: environment.baseUrl + 'users/add',
    DELETE_USER: environment.baseUrl + 'users/delete',
    USER: environment.baseUrl + 'users/getById',

}
