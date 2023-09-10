/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Blueboard
 * OpenAPI spec version: v4.0.0
 */
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  UsersIndexUsersResponse,
  GetApiUsersParams,
  UsersCreateUserRequestBody,
  PostApiUsersParams,
  UsersViewUserResponse,
  ProblemDetails,
  UsersUpdateUserRequestBody
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType, BodyType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * Requires verified email; Requires one of the following permissions: Users.IndexUsers; Requires the following features to be enabled: Users
 */
export const getApiUsers = (
    params?: GetApiUsersParams,
 signal?: AbortSignal
) => {
      return useCustomClient<UsersIndexUsersResponse[]>(
      {url: `/Api/Users`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiUsersQueryKey = (params?: GetApiUsersParams,) => [`/Api/Users`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiUsersQueryOptions = <TData = Awaited<ReturnType<typeof getApiUsers>>, TError = ErrorType<void>>(params?: GetApiUsersParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiUsers>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiUsers>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiUsersQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiUsers>>> = ({ signal }) => getApiUsers(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiUsers>>>
export type GetApiUsersQueryError = ErrorType<void>

export const useGetApiUsers = <TData = Awaited<ReturnType<typeof getApiUsers>>, TError = ErrorType<void>>(
 params?: GetApiUsersParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiUsers>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiUsersQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * Requires the following features to be enabled: Users
 */
export const postApiUsers = (
    usersCreateUserRequestBody: BodyType<UsersCreateUserRequestBody>,
    params?: PostApiUsersParams,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Users`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: usersCreateUserRequestBody,
        params
    },
      );
    }
  


export const getPostApiUsersMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsers>>, TError,{data: BodyType<UsersCreateUserRequestBody>;params?: PostApiUsersParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiUsers>>, TError,{data: BodyType<UsersCreateUserRequestBody>;params?: PostApiUsersParams}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiUsers>>, {data: BodyType<UsersCreateUserRequestBody>;params?: PostApiUsersParams}> = (props) => {
          const {data,params} = props ?? {};

          return  postApiUsers(data,params,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiUsersMutationResult = NonNullable<Awaited<ReturnType<typeof postApiUsers>>>
    export type PostApiUsersMutationBody = BodyType<UsersCreateUserRequestBody>
    export type PostApiUsersMutationError = ErrorType<unknown>

    export const usePostApiUsers = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsers>>, TError,{data: BodyType<UsersCreateUserRequestBody>;params?: PostApiUsersParams}, TContext>, }
) => {
    
      const mutationOptions = getPostApiUsersMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * Requires verified email; Requires one of the following permissions: Users.ViewUser; Requires the following features to be enabled: Users
 */
export const getApiUsersId = (
    id: string,
 signal?: AbortSignal
) => {
      return useCustomClient<UsersViewUserResponse>(
      {url: `/Api/Users/${id}`, method: 'get', signal
    },
      );
    }
  

export const getGetApiUsersIdQueryKey = (id: string,) => [`/Api/Users/${id}`] as const;
  

    
export const getGetApiUsersIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiUsersId>>, TError = ErrorType<void>>(id: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiUsersId>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiUsersId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiUsersIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiUsersId>>> = ({ signal }) => getApiUsersId(id, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions}}

export type GetApiUsersIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiUsersId>>>
export type GetApiUsersIdQueryError = ErrorType<void>

export const useGetApiUsersId = <TData = Awaited<ReturnType<typeof getApiUsersId>>, TError = ErrorType<void>>(
 id: string, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiUsersId>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiUsersIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * Requires verified email; Requires one of the following permissions: Users.UpdateUser; Requires the following features to be enabled: Users
 */
export const patchApiUsersId = (
    id: string,
    usersUpdateUserRequestBody: BodyType<UsersUpdateUserRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Users/${id}`, method: 'patch',
      headers: {'Content-Type': 'application/json', },
      data: usersUpdateUserRequestBody
    },
      );
    }
  


export const getPatchApiUsersIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiUsersId>>, TError,{id: string;data: BodyType<UsersUpdateUserRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof patchApiUsersId>>, TError,{id: string;data: BodyType<UsersUpdateUserRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchApiUsersId>>, {id: string;data: BodyType<UsersUpdateUserRequestBody>}> = (props) => {
          const {id,data} = props ?? {};

          return  patchApiUsersId(id,data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PatchApiUsersIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiUsersId>>>
    export type PatchApiUsersIdMutationBody = BodyType<UsersUpdateUserRequestBody>
    export type PatchApiUsersIdMutationError = ErrorType<ProblemDetails>

    export const usePatchApiUsersId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiUsersId>>, TError,{id: string;data: BodyType<UsersUpdateUserRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPatchApiUsersIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * Requires verified email; Requires one of the following permissions: Users.DeleteUser; Requires the following features to be enabled: Users
 */
export const deleteApiUsersId = (
    id: string,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Users/${id}`, method: 'delete'
    },
      );
    }
  


export const getDeleteApiUsersIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiUsersId>>, TError,{id: string}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiUsersId>>, TError,{id: string}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiUsersId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiUsersId(id,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteApiUsersIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiUsersId>>>
    
    export type DeleteApiUsersIdMutationError = ErrorType<ProblemDetails>

    export const useDeleteApiUsersId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiUsersId>>, TError,{id: string}, TContext>, }
) => {
    
      const mutationOptions = getDeleteApiUsersIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * Requires verified email; Requires one of the following permissions: Users.KickUser; Requires the following features to be enabled: Users
 */
export const postApiUsersKickId = (
    id: string,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Users/Kick/${id}`, method: 'post'
    },
      );
    }
  


export const getPostApiUsersKickIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsersKickId>>, TError,{id: string}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiUsersKickId>>, TError,{id: string}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiUsersKickId>>, {id: string}> = (props) => {
          const {id} = props ?? {};

          return  postApiUsersKickId(id,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiUsersKickIdMutationResult = NonNullable<Awaited<ReturnType<typeof postApiUsersKickId>>>
    
    export type PostApiUsersKickIdMutationError = ErrorType<ProblemDetails>

    export const usePostApiUsersKickId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsersKickId>>, TError,{id: string}, TContext>, }
) => {
    
      const mutationOptions = getPostApiUsersKickIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * Requires verified email; Requires one of the following permissions: Users.KickAllUsers; Requires the following features to be enabled: Users
 */
export const postApiUsersKickAll = (
    
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Users/Kick/All`, method: 'post'
    },
      );
    }
  


export const getPostApiUsersKickAllMutationOptions = <TError = ErrorType<unknown>,
    TVariables = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsersKickAll>>, TError,TVariables, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiUsersKickAll>>, TError,TVariables, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiUsersKickAll>>, TVariables> = () => {
          

          return  postApiUsersKickAll()
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiUsersKickAllMutationResult = NonNullable<Awaited<ReturnType<typeof postApiUsersKickAll>>>
    
    export type PostApiUsersKickAllMutationError = ErrorType<unknown>

    export const usePostApiUsersKickAll = <TError = ErrorType<unknown>,
    TVariables = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiUsersKickAll>>, TError,TVariables, TContext>, }
) => {
    
      const mutationOptions = getPostApiUsersKickAllMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    