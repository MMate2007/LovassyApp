/**
 * Generated by orval v6.16.0 🍺
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
  ShopIndexLoloRequestsResponse,
  GetApiLoloRequestsParams,
  ShopCreateLoloRequestResponse,
  ShopCreateLoloRequestRequestBody,
  ShopViewLoloRequestResponse,
  ProblemDetails,
  ShopUpdateLoloRequestRequestBody,
  ShopOverruleLoloRequestRequestBody
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType, BodyType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.IndexLoloRequests<br><b>Requires the following features to be enabled</b>: Shop
 */
export const getApiLoloRequests = (
    params?: GetApiLoloRequestsParams,
 signal?: AbortSignal
) => {
      return useCustomClient<ShopIndexLoloRequestsResponse[]>(
      {url: `/Api/LoloRequests`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiLoloRequestsQueryKey = (params?: GetApiLoloRequestsParams,) => [`/Api/LoloRequests`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiLoloRequestsQueryOptions = <TData = Awaited<ReturnType<typeof getApiLoloRequests>>, TError = ErrorType<void>>(params?: GetApiLoloRequestsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequests>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequests>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiLoloRequestsQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLoloRequests>>> = ({ signal }) => getApiLoloRequests(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiLoloRequestsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiLoloRequests>>>
export type GetApiLoloRequestsQueryError = ErrorType<void>

export const useGetApiLoloRequests = <TData = Awaited<ReturnType<typeof getApiLoloRequests>>, TError = ErrorType<void>>(
 params?: GetApiLoloRequestsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequests>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiLoloRequestsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.CreateLoloRequest<br><b>Requires the following features to be enabled</b>: Shop
 */
export const postApiLoloRequests = (
    shopCreateLoloRequestRequestBody: BodyType<ShopCreateLoloRequestRequestBody>,
 ) => {
      return useCustomClient<ShopCreateLoloRequestResponse>(
      {url: `/Api/LoloRequests`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: shopCreateLoloRequestRequestBody
    },
      );
    }
  


export const getPostApiLoloRequestsMutationOptions = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiLoloRequests>>, TError,{data: BodyType<ShopCreateLoloRequestRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiLoloRequests>>, TError,{data: BodyType<ShopCreateLoloRequestRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiLoloRequests>>, {data: BodyType<ShopCreateLoloRequestRequestBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiLoloRequests(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiLoloRequestsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiLoloRequests>>>
    export type PostApiLoloRequestsMutationBody = BodyType<ShopCreateLoloRequestRequestBody>
    export type PostApiLoloRequestsMutationError = ErrorType<void>

    export const usePostApiLoloRequests = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiLoloRequests>>, TError,{data: BodyType<ShopCreateLoloRequestRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPostApiLoloRequestsMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.ViewLoloRequest<br><b>Requires the following features to be enabled</b>: Shop
 */
export const getApiLoloRequestsId = (
    id: number,
 signal?: AbortSignal
) => {
      return useCustomClient<ShopViewLoloRequestResponse>(
      {url: `/Api/LoloRequests/${id}`, method: 'get', signal
    },
      );
    }
  

export const getGetApiLoloRequestsIdQueryKey = (id: number,) => [`/Api/LoloRequests/${id}`] as const;
  

    
export const getGetApiLoloRequestsIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiLoloRequestsId>>, TError = ErrorType<void | ProblemDetails>>(id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequestsId>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequestsId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiLoloRequestsIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLoloRequestsId>>> = ({ signal }) => getApiLoloRequestsId(id, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions}}

export type GetApiLoloRequestsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiLoloRequestsId>>>
export type GetApiLoloRequestsIdQueryError = ErrorType<void | ProblemDetails>

export const useGetApiLoloRequestsId = <TData = Awaited<ReturnType<typeof getApiLoloRequestsId>>, TError = ErrorType<void | ProblemDetails>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequestsId>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiLoloRequestsIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.UpdateOwnLoloRequest, Shop.UpdateLoloRequest<br><b>Requires the following features to be enabled</b>: Shop
 */
export const patchApiLoloRequestsId = (
    id: number,
    shopUpdateLoloRequestRequestBody: BodyType<ShopUpdateLoloRequestRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/LoloRequests/${id}`, method: 'patch',
      headers: {'Content-Type': 'application/json', },
      data: shopUpdateLoloRequestRequestBody
    },
      );
    }
  


export const getPatchApiLoloRequestsIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiLoloRequestsId>>, TError,{id: number;data: BodyType<ShopUpdateLoloRequestRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof patchApiLoloRequestsId>>, TError,{id: number;data: BodyType<ShopUpdateLoloRequestRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchApiLoloRequestsId>>, {id: number;data: BodyType<ShopUpdateLoloRequestRequestBody>}> = (props) => {
          const {id,data} = props ?? {};

          return  patchApiLoloRequestsId(id,data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PatchApiLoloRequestsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiLoloRequestsId>>>
    export type PatchApiLoloRequestsIdMutationBody = BodyType<ShopUpdateLoloRequestRequestBody>
    export type PatchApiLoloRequestsIdMutationError = ErrorType<ProblemDetails>

    export const usePatchApiLoloRequestsId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiLoloRequestsId>>, TError,{id: number;data: BodyType<ShopUpdateLoloRequestRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPatchApiLoloRequestsIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.DeleteOwnLoloRequest, Shop.DeleteLoloRequest<br><b>Requires the following features to be enabled</b>: Shop
 */
export const deleteApiLoloRequestsId = (
    id: number,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/LoloRequests/${id}`, method: 'delete'
    },
      );
    }
  


export const getDeleteApiLoloRequestsIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiLoloRequestsId>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiLoloRequestsId>>, TError,{id: number}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiLoloRequestsId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiLoloRequestsId(id,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteApiLoloRequestsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiLoloRequestsId>>>
    
    export type DeleteApiLoloRequestsIdMutationError = ErrorType<ProblemDetails>

    export const useDeleteApiLoloRequestsId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiLoloRequestsId>>, TError,{id: number}, TContext>, }
) => {
    
      const mutationOptions = getDeleteApiLoloRequestsIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.OverruleLoloRequest<br><b>Requires the following features to be enabled</b>: Shop
 */
export const postApiLoloRequestsOverruleId = (
    id: number,
    shopOverruleLoloRequestRequestBody: BodyType<ShopOverruleLoloRequestRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/LoloRequests/Overrule/${id}`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: shopOverruleLoloRequestRequestBody
    },
      );
    }
  


export const getPostApiLoloRequestsOverruleIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiLoloRequestsOverruleId>>, TError,{id: number;data: BodyType<ShopOverruleLoloRequestRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiLoloRequestsOverruleId>>, TError,{id: number;data: BodyType<ShopOverruleLoloRequestRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiLoloRequestsOverruleId>>, {id: number;data: BodyType<ShopOverruleLoloRequestRequestBody>}> = (props) => {
          const {id,data} = props ?? {};

          return  postApiLoloRequestsOverruleId(id,data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiLoloRequestsOverruleIdMutationResult = NonNullable<Awaited<ReturnType<typeof postApiLoloRequestsOverruleId>>>
    export type PostApiLoloRequestsOverruleIdMutationBody = BodyType<ShopOverruleLoloRequestRequestBody>
    export type PostApiLoloRequestsOverruleIdMutationError = ErrorType<ProblemDetails>

    export const usePostApiLoloRequestsOverruleId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiLoloRequestsOverruleId>>, TError,{id: number;data: BodyType<ShopOverruleLoloRequestRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPostApiLoloRequestsOverruleIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    