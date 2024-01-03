// tslint:disable
import { AxiosPromise } from "axios";
import { APIHandler, APIURLTypes, APIParams } from "../base";
import { InitiateUserRequest, ProblemDetails, UserDto } from "../model";

export class UsersApi extends APIHandler {
    static urls: APIURLTypes.UsersApi = {
        initiateUser: "/api/users/initiate"
    };
    
    constructor() {
        super("UsersApi");
    }
    
    /**
     * @param initiateUserRequest 
     */
    public initiateUser(params: APIParams & {
        initiateUserRequest?: InitiateUserRequest;
    } = {}): AxiosPromise<UserDto> {
        const apiURL: string = this.initAPIURL(UsersApi.urls.initiateUser, null);
        params.options = this.initOptions(params.options, {  }, {  }, params.canceler);
        const body: any = params.initiateUserRequest;
        return this.makeCall<UserDto>("POST".toLowerCase(), apiURL, "initiateUser", params.options, body, "initiateUser");
    }

}
