/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Blueboard
 * OpenAPI spec version: v4.0.0
 */
import {
  useQuery
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'
import type {
  AuthIndexPermissionsResponse,
  GetApiPermissionsParams
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * Requires verified email; Requires one of the following permissions: Auth.IndexPermissions
 * @summary Get a list of all permissions
 */
export const getApiPermissions = (
    params?: GetApiPermissionsParams,
 signal?: AbortSignal
) => {
      return useCustomClient<AuthIndexPermissionsResponse[]>(
      {url: `/Api/Permissions`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiPermissionsQueryKey = (params?: GetApiPermissionsParams,) => [`/Api/Permissions`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiPermissionsQueryOptions = <TData = Awaited<ReturnType<typeof getApiPermissions>>, TError = ErrorType<void>>(params?: GetApiPermissionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiPermissions>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiPermissions>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiPermissionsQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiPermissions>>> = ({ signal }) => getApiPermissions(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiPermissionsQueryResult = NonNullable<Awaited<ReturnType<typeof getApiPermissions>>>
export type GetApiPermissionsQueryError = ErrorType<void>

/**
 * @summary Get a list of all permissions
 */
export const useGetApiPermissions = <TData = Awaited<ReturnType<typeof getApiPermissions>>, TError = ErrorType<void>>(
 params?: GetApiPermissionsParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiPermissions>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiPermissionsQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

