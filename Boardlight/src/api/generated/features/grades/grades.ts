/**
 * Generated by orval v6.16.0 🍺
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
  SchoolIndexGradesResponse,
  GetApiGradesParams
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * <b>Requires verified email</b><br><b>Requires one of the following permissions</b>: School.IndexGrades<br><b>Requires the following features to be enabled</b>: School
 */
export const getApiGrades = (
    params?: GetApiGradesParams,
 signal?: AbortSignal
) => {
      return useCustomClient<SchoolIndexGradesResponse[]>(
      {url: `/Api/Grades`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiGradesQueryKey = (params?: GetApiGradesParams,) => [`/Api/Grades`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiGradesQueryOptions = <TData = Awaited<ReturnType<typeof getApiGrades>>, TError = ErrorType<void>>(params?: GetApiGradesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiGrades>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiGrades>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiGradesQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiGrades>>> = ({ signal }) => getApiGrades(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiGradesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiGrades>>>
export type GetApiGradesQueryError = ErrorType<void>

export const useGetApiGrades = <TData = Awaited<ReturnType<typeof getApiGrades>>, TError = ErrorType<void>>(
 params?: GetApiGradesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiGrades>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiGradesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

