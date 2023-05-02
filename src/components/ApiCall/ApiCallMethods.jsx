import {BaseUrl,User,ApiVersion} from './URI';
export const rAllUserData = {
    BaseUrl: BaseUrl,
    Module:User,
    ApiVersion:ApiVersion,
    EndPoint:"rAll_user",
    method: "GET",
    parameters:""
  };
export const createIdentity = {
    BaseUrl: BaseUrl,
    Module:User,
    ApiVersion:ApiVersion,
    EndPoint:"create_identity",
    method: "POST",
    body:{}
  };
