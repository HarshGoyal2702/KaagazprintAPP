import { environment } from "src/environments/environment.prod";

export const APIURLS = {
    GENERATE_OTP_BY_PHONE_NUMBER: environment.baseUrl + 'users/generateOTP',
    VERIFY_OTP: environment.baseUrl + 'users/validateOTP',
    UPLOAD_FILE: environment.baseUrl + 'fileController/upload',
}
