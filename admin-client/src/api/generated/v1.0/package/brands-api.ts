/* tslint:disable */
/* eslint-disable */
/**
 * Macrothing API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { BrandSummaryDto } from '../package';
// @ts-ignore
import { CreateBrandRequest } from '../package';
// @ts-ignore
import { DeleteBrandsRequest } from '../package';
// @ts-ignore
import { ProblemDetails } from '../package';
// @ts-ignore
import { UpdateBrandRequest } from '../package';
/**
 * BrandsApi - axios parameter creator
 * @export
 */
export const BrandsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateBrandRequest} [createBrandRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBrand: async (createBrandRequest?: CreateBrandRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/brands`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createBrandRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBrand: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteBrand', 'id', id)
            const localVarPath = `/api/v1/brands/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {DeleteBrandsRequest} [deleteBrandsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBrands: async (deleteBrandsRequest?: DeleteBrandsRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/brands/bulk-delete`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deleteBrandsRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandSummaries: async (pageNumber?: number, pageSize?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/brands`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)

            if (pageNumber !== undefined) {
                localVarQueryParameter['PageNumber'] = pageNumber;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandSummary: async (id: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getBrandSummary', 'id', id)
            const localVarPath = `/api/v1/brands/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} id 
         * @param {UpdateBrandRequest} [updateBrandRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBrand: async (id: number, updateBrandRequest?: UpdateBrandRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateBrand', 'id', id)
            const localVarPath = `/api/v1/brands/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateBrandRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BrandsApi - functional programming interface
 * @export
 */
export const BrandsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BrandsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateBrandRequest} [createBrandRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createBrand(createBrandRequest?: CreateBrandRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BrandSummaryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createBrand(createBrandRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['BrandsApi.createBrand']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBrand(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBrand(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['BrandsApi.deleteBrand']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {DeleteBrandsRequest} [deleteBrandsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteBrands(deleteBrandsRequest?: DeleteBrandsRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<number>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteBrands(deleteBrandsRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['BrandsApi.deleteBrands']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBrandSummaries(pageNumber?: number, pageSize?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<BrandSummaryDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBrandSummaries(pageNumber, pageSize, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['BrandsApi.getBrandSummaries']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBrandSummary(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BrandSummaryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBrandSummary(id, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['BrandsApi.getBrandSummary']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {number} id 
         * @param {UpdateBrandRequest} [updateBrandRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateBrand(id: number, updateBrandRequest?: UpdateBrandRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BrandSummaryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateBrand(id, updateBrandRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['BrandsApi.updateBrand']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * BrandsApi - factory interface
 * @export
 */
export const BrandsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BrandsApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateBrandRequest} [createBrandRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createBrand(createBrandRequest?: CreateBrandRequest, options?: any): AxiosPromise<BrandSummaryDto> {
            return localVarFp.createBrand(createBrandRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBrand(id: number, options?: any): AxiosPromise<void> {
            return localVarFp.deleteBrand(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {DeleteBrandsRequest} [deleteBrandsRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteBrands(deleteBrandsRequest?: DeleteBrandsRequest, options?: any): AxiosPromise<number> {
            return localVarFp.deleteBrands(deleteBrandsRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} [pageNumber] 
         * @param {number} [pageSize] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandSummaries(pageNumber?: number, pageSize?: number, options?: any): AxiosPromise<Array<BrandSummaryDto>> {
            return localVarFp.getBrandSummaries(pageNumber, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBrandSummary(id: number, options?: any): AxiosPromise<BrandSummaryDto> {
            return localVarFp.getBrandSummary(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} id 
         * @param {UpdateBrandRequest} [updateBrandRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateBrand(id: number, updateBrandRequest?: UpdateBrandRequest, options?: any): AxiosPromise<BrandSummaryDto> {
            return localVarFp.updateBrand(id, updateBrandRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BrandsApi - interface
 * @export
 * @interface BrandsApi
 */
export interface BrandsApiInterface {
    /**
     * 
     * @param {CreateBrandRequest} [createBrandRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApiInterface
     */
    createBrand(createBrandRequest?: CreateBrandRequest, options?: RawAxiosRequestConfig): AxiosPromise<BrandSummaryDto>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApiInterface
     */
    deleteBrand(id: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;

    /**
     * 
     * @param {DeleteBrandsRequest} [deleteBrandsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApiInterface
     */
    deleteBrands(deleteBrandsRequest?: DeleteBrandsRequest, options?: RawAxiosRequestConfig): AxiosPromise<number>;

    /**
     * 
     * @param {number} [pageNumber] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApiInterface
     */
    getBrandSummaries(pageNumber?: number, pageSize?: number, options?: RawAxiosRequestConfig): AxiosPromise<Array<BrandSummaryDto>>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApiInterface
     */
    getBrandSummary(id: number, options?: RawAxiosRequestConfig): AxiosPromise<BrandSummaryDto>;

    /**
     * 
     * @param {number} id 
     * @param {UpdateBrandRequest} [updateBrandRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApiInterface
     */
    updateBrand(id: number, updateBrandRequest?: UpdateBrandRequest, options?: RawAxiosRequestConfig): AxiosPromise<BrandSummaryDto>;

}

/**
 * BrandsApi - object-oriented interface
 * @export
 * @class BrandsApi
 * @extends {BaseAPI}
 */
export class BrandsApi extends BaseAPI implements BrandsApiInterface {
    /**
     * 
     * @param {CreateBrandRequest} [createBrandRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApi
     */
    public createBrand(createBrandRequest?: CreateBrandRequest, options?: RawAxiosRequestConfig) {
        return BrandsApiFp(this.configuration).createBrand(createBrandRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApi
     */
    public deleteBrand(id: number, options?: RawAxiosRequestConfig) {
        return BrandsApiFp(this.configuration).deleteBrand(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {DeleteBrandsRequest} [deleteBrandsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApi
     */
    public deleteBrands(deleteBrandsRequest?: DeleteBrandsRequest, options?: RawAxiosRequestConfig) {
        return BrandsApiFp(this.configuration).deleteBrands(deleteBrandsRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} [pageNumber] 
     * @param {number} [pageSize] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApi
     */
    public getBrandSummaries(pageNumber?: number, pageSize?: number, options?: RawAxiosRequestConfig) {
        return BrandsApiFp(this.configuration).getBrandSummaries(pageNumber, pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApi
     */
    public getBrandSummary(id: number, options?: RawAxiosRequestConfig) {
        return BrandsApiFp(this.configuration).getBrandSummary(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} id 
     * @param {UpdateBrandRequest} [updateBrandRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BrandsApi
     */
    public updateBrand(id: number, updateBrandRequest?: UpdateBrandRequest, options?: RawAxiosRequestConfig) {
        return BrandsApiFp(this.configuration).updateBrand(id, updateBrandRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

