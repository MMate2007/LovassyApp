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
  ShopIndexOwnedItemsResponse,
  GetApiOwnedItemsParams,
  ShopCreateOwnedItemResponse,
  ShopCreateOwnedItemRequestBody,
  ShopIndexOwnOwnedItemsResponse,
  GetApiOwnedItemsOwnParams,
  ShopViewOwnedItemResponse,
  ProblemDetails,
  ShopUpdateOwnedItemRequestBody,
  ShopUseOwnedItemRequestBody
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType, BodyType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.IndexOwnedItems<br><b>Requires the following features to be enabled</b>: Shop
 */
export const getApiOwnedItems = (
    params?: GetApiOwnedItemsParams,
 signal?: AbortSignal
) => {
      return useCustomClient<ShopIndexOwnedItemsResponse[]>(
      {url: `/Api/OwnedItems`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiOwnedItemsQueryKey = (params?: GetApiOwnedItemsParams,) => [`/Api/OwnedItems`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiOwnedItemsQueryOptions = <TData = Awaited<ReturnType<typeof getApiOwnedItems>>, TError = ErrorType<void>>(params?: GetApiOwnedItemsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItems>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItems>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiOwnedItemsQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiOwnedItems>>> = ({ signal }) => getApiOwnedItems(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiOwnedItemsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiOwnedItems>>>
export type GetApiOwnedItemsQueryError = ErrorType<void>

export const useGetApiOwnedItems = <TData = Awaited<ReturnType<typeof getApiOwnedItems>>, TError = ErrorType<void>>(
 params?: GetApiOwnedItemsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItems>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiOwnedItemsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.CreateOwnedItem<br><b>Requires the following features to be enabled</b>: Shop
 */
export const postApiOwnedItems = (
    shopCreateOwnedItemRequestBody: BodyType<ShopCreateOwnedItemRequestBody>,
 ) => {
      return useCustomClient<ShopCreateOwnedItemResponse>(
      {url: `/Api/OwnedItems`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: shopCreateOwnedItemRequestBody
    },
      );
    }
  


export const getPostApiOwnedItemsMutationOptions = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiOwnedItems>>, TError,{data: BodyType<ShopCreateOwnedItemRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiOwnedItems>>, TError,{data: BodyType<ShopCreateOwnedItemRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiOwnedItems>>, {data: BodyType<ShopCreateOwnedItemRequestBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiOwnedItems(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiOwnedItemsMutationResult = NonNullable<Awaited<ReturnType<typeof postApiOwnedItems>>>
    export type PostApiOwnedItemsMutationBody = BodyType<ShopCreateOwnedItemRequestBody>
    export type PostApiOwnedItemsMutationError = ErrorType<void>

    export const usePostApiOwnedItems = <TError = ErrorType<void>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiOwnedItems>>, TError,{data: BodyType<ShopCreateOwnedItemRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPostApiOwnedItemsMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.IndexOwnOwnedItems<br><b>Requires the following features to be enabled</b>: Shop
 */
export const getApiOwnedItemsOwn = (
    params?: GetApiOwnedItemsOwnParams,
 signal?: AbortSignal
) => {
      return useCustomClient<ShopIndexOwnOwnedItemsResponse[]>(
      {url: `/Api/OwnedItems/Own`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiOwnedItemsOwnQueryKey = (params?: GetApiOwnedItemsOwnParams,) => [`/Api/OwnedItems/Own`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiOwnedItemsOwnQueryOptions = <TData = Awaited<ReturnType<typeof getApiOwnedItemsOwn>>, TError = ErrorType<void>>(params?: GetApiOwnedItemsOwnParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItemsOwn>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItemsOwn>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiOwnedItemsOwnQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiOwnedItemsOwn>>> = ({ signal }) => getApiOwnedItemsOwn(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiOwnedItemsOwnQueryResult = NonNullable<Awaited<ReturnType<typeof getApiOwnedItemsOwn>>>
export type GetApiOwnedItemsOwnQueryError = ErrorType<void>

export const useGetApiOwnedItemsOwn = <TData = Awaited<ReturnType<typeof getApiOwnedItemsOwn>>, TError = ErrorType<void>>(
 params?: GetApiOwnedItemsOwnParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItemsOwn>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiOwnedItemsOwnQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.ViewOwnedItem, Shop.ViewOwnOwnedItem<br><b>Requires the following features to be enabled</b>: Shop
 */
export const getApiOwnedItemsId = (
    id: number,
 signal?: AbortSignal
) => {
      return useCustomClient<ShopViewOwnedItemResponse>(
      {url: `/Api/OwnedItems/${id}`, method: 'get', signal
    },
      );
    }
  

export const getGetApiOwnedItemsIdQueryKey = (id: number,) => [`/Api/OwnedItems/${id}`] as const;
  

    
export const getGetApiOwnedItemsIdQueryOptions = <TData = Awaited<ReturnType<typeof getApiOwnedItemsId>>, TError = ErrorType<void | ProblemDetails>>(id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItemsId>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItemsId>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiOwnedItemsIdQueryKey(id);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiOwnedItemsId>>> = ({ signal }) => getApiOwnedItemsId(id, signal);
    
      
      
   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions}}

export type GetApiOwnedItemsIdQueryResult = NonNullable<Awaited<ReturnType<typeof getApiOwnedItemsId>>>
export type GetApiOwnedItemsIdQueryError = ErrorType<void | ProblemDetails>

export const useGetApiOwnedItemsId = <TData = Awaited<ReturnType<typeof getApiOwnedItemsId>>, TError = ErrorType<void | ProblemDetails>>(
 id: number, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiOwnedItemsId>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiOwnedItemsIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.UpdateOwnedItem<br><b>Requires the following features to be enabled</b>: Shop
 */
export const patchApiOwnedItemsId = (
    id: number,
    shopUpdateOwnedItemRequestBody: BodyType<ShopUpdateOwnedItemRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/OwnedItems/${id}`, method: 'patch',
      headers: {'Content-Type': 'application/json', },
      data: shopUpdateOwnedItemRequestBody
    },
      );
    }
  


export const getPatchApiOwnedItemsIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiOwnedItemsId>>, TError,{id: number;data: BodyType<ShopUpdateOwnedItemRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof patchApiOwnedItemsId>>, TError,{id: number;data: BodyType<ShopUpdateOwnedItemRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchApiOwnedItemsId>>, {id: number;data: BodyType<ShopUpdateOwnedItemRequestBody>}> = (props) => {
          const {id,data} = props ?? {};

          return  patchApiOwnedItemsId(id,data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PatchApiOwnedItemsIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchApiOwnedItemsId>>>
    export type PatchApiOwnedItemsIdMutationBody = BodyType<ShopUpdateOwnedItemRequestBody>
    export type PatchApiOwnedItemsIdMutationError = ErrorType<ProblemDetails>

    export const usePatchApiOwnedItemsId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchApiOwnedItemsId>>, TError,{id: number;data: BodyType<ShopUpdateOwnedItemRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPatchApiOwnedItemsIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.DeleteOwnedItem, Shop.DeleteOwnOwnedItem<br><b>Requires the following features to be enabled</b>: Shop
 */
export const deleteApiOwnedItemsId = (
    id: number,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/OwnedItems/${id}`, method: 'delete'
    },
      );
    }
  


export const getDeleteApiOwnedItemsIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiOwnedItemsId>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiOwnedItemsId>>, TError,{id: number}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiOwnedItemsId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiOwnedItemsId(id,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteApiOwnedItemsIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiOwnedItemsId>>>
    
    export type DeleteApiOwnedItemsIdMutationError = ErrorType<ProblemDetails>

    export const useDeleteApiOwnedItemsId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiOwnedItemsId>>, TError,{id: number}, TContext>, }
) => {
    
      const mutationOptions = getDeleteApiOwnedItemsIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: Shop.UseOwnOwnedItem<br><b>Requires the following features to be enabled</b>: Shop
 */
export const postApiOwnedItemsIdUse = (
    id: number,
    shopUseOwnedItemRequestBody: BodyType<ShopUseOwnedItemRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/OwnedItems/${id}/Use`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: shopUseOwnedItemRequestBody
    },
      );
    }
  


export const getPostApiOwnedItemsIdUseMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiOwnedItemsIdUse>>, TError,{id: number;data: BodyType<ShopUseOwnedItemRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiOwnedItemsIdUse>>, TError,{id: number;data: BodyType<ShopUseOwnedItemRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiOwnedItemsIdUse>>, {id: number;data: BodyType<ShopUseOwnedItemRequestBody>}> = (props) => {
          const {id,data} = props ?? {};

          return  postApiOwnedItemsIdUse(id,data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiOwnedItemsIdUseMutationResult = NonNullable<Awaited<ReturnType<typeof postApiOwnedItemsIdUse>>>
    export type PostApiOwnedItemsIdUseMutationBody = BodyType<ShopUseOwnedItemRequestBody>
    export type PostApiOwnedItemsIdUseMutationError = ErrorType<ProblemDetails>

    export const usePostApiOwnedItemsIdUse = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiOwnedItemsIdUse>>, TError,{id: number;data: BodyType<ShopUseOwnedItemRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPostApiOwnedItemsIdUseMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    