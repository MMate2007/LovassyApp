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
  ImportIndexUsersResponse,
  GetApiImportUsersParams,
  ProblemDetails,
  ImportImportGradesRequestBody,
  ImportUpdateResetKeyPasswordRequestBody
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType, BodyType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * Requires the following features to be enabled: Import
 * @summary Get a list of all users for grade importing
 */
export const getApiImportUsers = (
    params?: GetApiImportUsersParams,
 signal?: AbortSignal
) => {
      return useCustomClient<ImportIndexUsersResponse[]>(
      {url: `/Api/Import/Users`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiImportUsersQueryKey = (params?: GetApiImportUsersParams,) => [`/Api/Import/Users`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiImportUsersQueryOptions = <TData = Awaited<ReturnType<typeof getApiImportUsers>>, TError = ErrorType<void>>(params?: GetApiImportUsersParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiImportUsers>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiImportUsers>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiImportUsersQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiImportUsers>>> = ({ signal }) => getApiImportUsers(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiImportUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getApiImportUsers>>>
export type GetApiImportUsersQueryError = ErrorType<void>

/**
 * @summary Get a list of all users for grade importing
 */
export const useGetApiImportUsers = <TData = Awaited<ReturnType<typeof getApiImportUsers>>, TError = ErrorType<void>>(
 params?: GetApiImportUsersParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiImportUsers>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiImportUsersQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * Requires the following features to be enabled: Import
 * @summary Import grades for a user
 */
export const postApiImportGradesUserId = (
    userId: string,
    importImportGradesRequestBody: BodyType<ImportImportGradesRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Import/Grades/${userId}`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: importImportGradesRequestBody
    },
      );
    }
  


export const getPostApiImportGradesUserIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiImportGradesUserId>>, TError,{userId: string;data: BodyType<ImportImportGradesRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiImportGradesUserId>>, TError,{userId: string;data: BodyType<ImportImportGradesRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiImportGradesUserId>>, {userId: string;data: BodyType<ImportImportGradesRequestBody>}> = (props) => {
          const {userId,data} = props ?? {};

          return  postApiImportGradesUserId(userId,data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiImportGradesUserIdMutationResult = NonNullable<Awaited<ReturnType<typeof postApiImportGradesUserId>>>
    export type PostApiImportGradesUserIdMutationBody = BodyType<ImportImportGradesRequestBody>
    export type PostApiImportGradesUserIdMutationError = ErrorType<ProblemDetails>

    /**
 * @summary Import grades for a user
 */
export const usePostApiImportGradesUserId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiImportGradesUserId>>, TError,{userId: string;data: BodyType<ImportImportGradesRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPostApiImportGradesUserIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * Requires the following features to be enabled: Import
 * @summary Set the reset key password
 */
export const putApiImportResetKeyPassword = (
    importUpdateResetKeyPasswordRequestBody: BodyType<ImportUpdateResetKeyPasswordRequestBody>,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Import/ResetKeyPassword`, method: 'put',
      headers: {'Content-Type': 'application/json', },
      data: importUpdateResetKeyPasswordRequestBody
    },
      );
    }
  


export const getPutApiImportResetKeyPasswordMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiImportResetKeyPassword>>, TError,{data: BodyType<ImportUpdateResetKeyPasswordRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof putApiImportResetKeyPassword>>, TError,{data: BodyType<ImportUpdateResetKeyPasswordRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof putApiImportResetKeyPassword>>, {data: BodyType<ImportUpdateResetKeyPasswordRequestBody>}> = (props) => {
          const {data} = props ?? {};

          return  putApiImportResetKeyPassword(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PutApiImportResetKeyPasswordMutationResult = NonNullable<Awaited<ReturnType<typeof putApiImportResetKeyPassword>>>
    export type PutApiImportResetKeyPasswordMutationBody = BodyType<ImportUpdateResetKeyPasswordRequestBody>
    export type PutApiImportResetKeyPasswordMutationError = ErrorType<unknown>

    /**
 * @summary Set the reset key password
 */
export const usePutApiImportResetKeyPassword = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof putApiImportResetKeyPassword>>, TError,{data: BodyType<ImportUpdateResetKeyPasswordRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPutApiImportResetKeyPasswordMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    