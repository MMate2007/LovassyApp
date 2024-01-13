/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Blueboard
 * OpenAPI spec version: 4.1.0
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
  ShopIndexLoloRequestCreatedNotifiersResponse,
  GetApiLoloRequestCreatedNotifiersParams,
  ShopUpdateLoloRequestCreatedNotifiersRequestBody
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType, BodyType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * Requires verified email; Requires one of the following permissions: Shop.IndexLoloRequestCreatedNotifiers; Requires the following features to be enabled: Shop
 * @summary Get a list of all emails to notify when a lolo request is created
 */
export const getApiLoloRequestCreatedNotifiers = (
    params?: GetApiLoloRequestCreatedNotifiersParams,
 signal?: AbortSignal
) => {
      return useCustomClient<ShopIndexLoloRequestCreatedNotifiersResponse[]>(
      {url: `/Api/LoloRequestCreatedNotifiers`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiLoloRequestCreatedNotifiersQueryKey = (params?: GetApiLoloRequestCreatedNotifiersParams,) => [`/Api/LoloRequestCreatedNotifiers`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiLoloRequestCreatedNotifiersQueryOptions = <TData = Awaited<ReturnType<typeof getApiLoloRequestCreatedNotifiers>>, TError = ErrorType<void>>(params?: GetApiLoloRequestCreatedNotifiersParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequestCreatedNotifiers>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequestCreatedNotifiers>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiLoloRequestCreatedNotifiersQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiLoloRequestCreatedNotifiers>>> = ({ signal }) => getApiLoloRequestCreatedNotifiers(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiLoloRequestCreatedNotifiersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiLoloRequestCreatedNotifiers>>>
export type GetApiLoloRequestCreatedNotifiersQueryError = ErrorType<void>

/**
 * @summary Get a list of all emails to notify when a lolo request is created
 */
export const useGetApiLoloRequestCreatedNotifiers = <TData = Awaited<ReturnType<typeof getApiLoloRequestCreatedNotifiers>>, TError = ErrorType<void>>(
 params?: GetApiLoloRequestCreatedNotifiersParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiLoloRequestCreatedNotifiers>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiLoloRequestCreatedNotifiersQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * Requires verified email; Requires one of the following permissions: Shop.UpdateLoloRequestCreatedNotifiers; Requires the following features to be enabled: Shop
 * @summary Update the list of emails to notify when a lolo request is created
 */
export const putApiLoloRequestCreatedNotifiers = (
    shopUpdateLoloRequestCreatedNotifiersRequestBody: BodyType<ShopUpdateLoloRequestCreatedNotifiersRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/LoloRequestCreatedNotifiers`, method: 'put',
      headers: {'Content-Type': 'application/json', },
      data: shopUpdateLoloRequestCreatedNotifiersRequestBody
    },
      );
    }
  


export const getPutApiLoloRequestCreatedNotifiersMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiLoloRequestCreatedNotifiers>>, TError,{data: BodyType<ShopUpdateLoloRequestCreatedNotifiersRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof putApiLoloRequestCreatedNotifiers>>, TError,{data: BodyType<ShopUpdateLoloRequestCreatedNotifiersRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiLoloRequestCreatedNotifiers>>, {data: BodyType<ShopUpdateLoloRequestCreatedNotifiersRequestBody>}> = (props) => {
          const {data} = props ?? {};

          return  putApiLoloRequestCreatedNotifiers(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PutApiLoloRequestCreatedNotifiersMutationResult = NonNullable<Awaited<ReturnType<typeof putApiLoloRequestCreatedNotifiers>>>
    export type PutApiLoloRequestCreatedNotifiersMutationBody = BodyType<ShopUpdateLoloRequestCreatedNotifiersRequestBody>
    export type PutApiLoloRequestCreatedNotifiersMutationError = ErrorType<unknown>

    /**
 * @summary Update the list of emails to notify when a lolo request is created
 */
export const usePutApiLoloRequestCreatedNotifiers = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiLoloRequestCreatedNotifiers>>, TError,{data: BodyType<ShopUpdateLoloRequestCreatedNotifiersRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPutApiLoloRequestCreatedNotifiersMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    