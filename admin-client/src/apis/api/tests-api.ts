// tslint:disable
import { AxiosPromise } from "axios";
import { APIHandler, APIURLTypes, APIParams } from "../base";
import {  } from "../model";

export class TestsApi extends APIHandler {
    static urls: APIURLTypes.TestsApi = {
        apiTestsGet: "/api/tests"
    };
    
    constructor() {
        super("TestsApi");
    }
    
    /**
     */
    public apiTestsGet(params: APIParams & {
        
    } = {}): AxiosPromise<string> {
        const apiURL: string = this.initAPIURL(TestsApi.urls.apiTestsGet, null);
        params.options = this.initOptions(params.options, {  }, {  }, params.canceler);
        const body: any = null;
        return this.makeCall<string>("GET".toLowerCase(), apiURL, "apiTestsGet", params.options, body, "apiTestsGet");
    }

}
