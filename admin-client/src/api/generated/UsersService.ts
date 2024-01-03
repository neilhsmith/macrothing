import {
  InitiateUserRequest,
  UserDto,
  IList,
  List,
  IListResult,
  ListResultDto,
  IPagedResult,
  PagedResultDto,
  Dictionary,
  IDictionary,
  IRequestOptions,
  IRequestConfig,
  getConfigs,
  axios,
  basePath
} from './index.defs';

export class UsersService {
  /** Generate by swagger-axios-codegen */
  // @ts-nocheck
  /* eslint-disable */

  /**
   *
   */
  static initiateUser(
    params: {
      /** requestBody */
      body?: InitiateUserRequest;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/users/initiate';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}
