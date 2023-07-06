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
  ShopIndexQRCodesResponse,
  GetApiQRCodesParams,
  ShopCreateQRCodeResponse,
  ShopCreateQRCodeRequestBody,
  ProblemDetails,
  ShopUpdateQRCodeRequestBody
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType, BodyType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.IndexQRCodes<br><b>Requires the following features to be enabled</b>: Shop
 */
export const getApiQRCodes = (
    params?: GetApiQRCodesParams,
 signal?: AbortSignal
) => {
      return useCustomClient<ShopIndexQRCodesResponse>(
      {url: `/Api/QRCodes`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiQRCodesQueryKey = (params?: GetApiQRCodesParams,) => [`/Api/QRCodes`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiQRCodesQueryOptions = <TData = Awaited<ReturnType<typeof getApiQRCodes>>, TError = ErrorType<void>>(params?: GetApiQRCodesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiQRCodes>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiQRCodes>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiQRCodesQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiQRCodes>>> = ({ signal }) => getApiQRCodes(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiQRCodesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQRCodes>>>
export type GetApiQRCodesQueryError = ErrorType<void>

export const useGetApiQRCodes = <TData = Awaited<ReturnType<typeof getApiQRCodes>>, TError = ErrorType<void>>(
 params?: GetApiQRCodesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiQRCodes>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiQRCodesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.CreateQRCode<br><b>Requires the following features to be enabled</b>: Shop
 */
export const postApiQRCodes = (
    shopCreateQRCodeRequestBody: BodyType<ShopCreateQRCodeRequestBody>,
 ) => {
      return useCustomClient<ShopCreateQRCodeResponse>(
      {url: `/Api/QRCodes`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: shopCreateQRCodeRequestBody
    },
      );
    }
  


export const getPostApiQRCodesMutationOptions = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiQRCodes>>, TError,{data: BodyType<ShopCreateQRCodeRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiQRCodes>>, TError,{data: BodyType<ShopCreateQRCodeRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiQRCodes>>, {data: BodyType<ShopCreateQRCodeRequestBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiQRCodes(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiQRCodesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiQRCodes>>>
    export type PostApiQRCodesMutationBody = BodyType<ShopCreateQRCodeRequestBody>
    export type PostApiQRCodesMutationError = ErrorType<void>

    export const usePostApiQRCodes = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiQRCodes>>, TError,{data: BodyType<ShopCreateQRCodeRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPostApiQRCodesMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.ViewQRCode<br><b>Requires the following features to be enabled</b>: Shop
 */
export const getApiQRCodesId = (
    id: number,
 signal?: AbortSignal
) => {
      return useCustomClient<void>(
      {url: `/Api/QRCodes/${id}`, method: 'get', signal
    },
      );
    }
  

export const getGetApiQRCodesIdQueryKey = (id: number,) => [`/Api/QRCodes/${id}`] as const;
  

    
export const getGetApiQRCodesIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiQRCodesId>>, TError = ErrorType<ProblemDetails>>(id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiQRCodesId>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiQRCodesId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiQRCodesIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiQRCodesId>>> = ({ signal }) => getApiQRCodesId(id, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions}}

export type GetApiQRCodesIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiQRCodesId>>>
export type GetApiQRCodesIdQueryError = ErrorType<ProblemDetails>

export const useGetApiQRCodesId = <TData = Awaited<ReturnType<typeof getApiQRCodesId>>, TError = ErrorType<ProblemDetails>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiQRCodesId>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiQRCodesIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.UpdateQRCode<br><b>Requires the following features to be enabled</b>: Shop
 */
export const patchApiQRCodesId = (
    id: number,
    shopUpdateQRCodeRequestBody: BodyType<ShopUpdateQRCodeRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/QRCodes/${id}`, method: 'patch',
      headers: {'Content-Type': 'application/json', },
      data: shopUpdateQRCodeRequestBody
    },
      );
    }
  


export const getPatchApiQRCodesIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiQRCodesId>>, TError,{id: number;data: BodyType<ShopUpdateQRCodeRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof patchApiQRCodesId>>, TError,{id: number;data: BodyType<ShopUpdateQRCodeRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchApiQRCodesId>>, {id: number;data: BodyType<ShopUpdateQRCodeRequestBody>}> = (props) => {
          const {id,data} = props ?? {};

          return  patchApiQRCodesId(id,data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PatchApiQRCodesIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiQRCodesId>>>
    export type PatchApiQRCodesIdMutationBody = BodyType<ShopUpdateQRCodeRequestBody>
    export type PatchApiQRCodesIdMutationError = ErrorType<ProblemDetails>

    export const usePatchApiQRCodesId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiQRCodesId>>, TError,{id: number;data: BodyType<ShopUpdateQRCodeRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPatchApiQRCodesIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.DeleteQRCode<br><b>Requires the following features to be enabled</b>: Shop
 */
export const deleteApiQRCodesId = (
    id: number,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/QRCodes/${id}`, method: 'delete'
    },
      );
    }
  


export const getDeleteApiQRCodesIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiQRCodesId>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiQRCodesId>>, TError,{id: number}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiQRCodesId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiQRCodesId(id,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteApiQRCodesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiQRCodesId>>>
    
    export type DeleteApiQRCodesIdMutationError = ErrorType<ProblemDetails>

    export const useDeleteApiQRCodesId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiQRCodesId>>, TError,{id: number}, TContext>, }
) => {
    
      const mutationOptions = getDeleteApiQRCodesIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    