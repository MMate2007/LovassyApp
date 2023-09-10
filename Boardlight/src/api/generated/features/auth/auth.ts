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
  AuthLoginResponse,
  AuthLoginRequestBody,
  AuthRefreshResponse,
  PostApiAuthRefreshParams,
  AuthViewControlResponse,
  ProblemDetails,
  PostApiAuthVerifyEmailParams,
  PostApiAuthResendVerifyEmailParams,
  AuthSendPasswordResetRequestBody,
  PostApiAuthSendPasswordResetParams,
  AuthResetPasswordRequestBody,
  PostApiAuthResetPasswordParams
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType, BodyType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * @summary Create a new session for a user
 */
export const postApiAuthLogin = (
    authLoginRequestBody: BodyType<AuthLoginRequestBody>,
 ) => {
      return useCustomClient<AuthLoginResponse>(
      {url: `/Api/Auth/Login`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: authLoginRequestBody
    },
      );
    }
  


export const getPostApiAuthLoginMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthLogin>>, TError,{data: BodyType<AuthLoginRequestBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiAuthLogin>>, TError,{data: BodyType<AuthLoginRequestBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAuthLogin>>, {data: BodyType<AuthLoginRequestBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiAuthLogin(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiAuthLoginMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAuthLogin>>>
    export type PostApiAuthLoginMutationBody = BodyType<AuthLoginRequestBody>
    export type PostApiAuthLoginMutationError = ErrorType<unknown>

    /**
 * @summary Create a new session for a user
 */
export const usePostApiAuthLogin = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthLogin>>, TError,{data: BodyType<AuthLoginRequestBody>}, TContext>, }
) => {
    
      const mutationOptions = getPostApiAuthLoginMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Refresh a user's session
 */
export const postApiAuthRefresh = (
    params?: PostApiAuthRefreshParams,
 ) => {
      return useCustomClient<AuthRefreshResponse>(
      {url: `/Api/Auth/Refresh`, method: 'post',
        params
    },
      );
    }
  


export const getPostApiAuthRefreshMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthRefresh>>, TError,{params?: PostApiAuthRefreshParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiAuthRefresh>>, TError,{params?: PostApiAuthRefreshParams}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAuthRefresh>>, {params?: PostApiAuthRefreshParams}> = (props) => {
          const {params} = props ?? {};

          return  postApiAuthRefresh(params,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiAuthRefreshMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAuthRefresh>>>
    
    export type PostApiAuthRefreshMutationError = ErrorType<unknown>

    /**
 * @summary Refresh a user's session
 */
export const usePostApiAuthRefresh = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthRefresh>>, TError,{params?: PostApiAuthRefreshParams}, TContext>, }
) => {
    
      const mutationOptions = getPostApiAuthRefreshMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * Requires one of the following permissions: Auth.Control
 * @summary Get information about the current user
 */
export const getApiAuthControl = (
    
 signal?: AbortSignal
) => {
      return useCustomClient<AuthViewControlResponse>(
      {url: `/Api/Auth/Control`, method: 'get', signal
    },
      );
    }
  

export const getGetApiAuthControlQueryKey = () => [`/Api/Auth/Control`] as const;
  

    
export const getGetApiAuthControlQueryOptions = <TData = Awaited<ReturnType<typeof getApiAuthControl>>, TError = ErrorType<void>>( options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiAuthControl>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiAuthControl>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiAuthControlQueryKey();

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiAuthControl>>> = ({ signal }) => getApiAuthControl(signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiAuthControlQueryResult = NonNullable<Awaited<ReturnType<typeof getApiAuthControl>>>
export type GetApiAuthControlQueryError = ErrorType<void>

/**
 * @summary Get information about the current user
 */
export const useGetApiAuthControl = <TData = Awaited<ReturnType<typeof getApiAuthControl>>, TError = ErrorType<void>>(
  options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiAuthControl>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiAuthControlQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * @summary Delete the current user's session and refresh cookie
 */
export const deleteApiAuthLogout = (
    
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Auth/Logout`, method: 'delete'
    },
      );
    }
  


export const getDeleteApiAuthLogoutMutationOptions = <TError = ErrorType<unknown>,
    TVariables = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiAuthLogout>>, TError,TVariables, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiAuthLogout>>, TError,TVariables, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiAuthLogout>>, TVariables> = () => {
          

          return  deleteApiAuthLogout()
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteApiAuthLogoutMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiAuthLogout>>>
    
    export type DeleteApiAuthLogoutMutationError = ErrorType<unknown>

    /**
 * @summary Delete the current user's session and refresh cookie
 */
export const useDeleteApiAuthLogout = <TError = ErrorType<unknown>,
    TVariables = void,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiAuthLogout>>, TError,TVariables, TContext>, }
) => {
    
      const mutationOptions = getDeleteApiAuthLogoutMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Verify a user's email address
 */
export const postApiAuthVerifyEmail = (
    params?: PostApiAuthVerifyEmailParams,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Auth/VerifyEmail`, method: 'post',
        params
    },
      );
    }
  


export const getPostApiAuthVerifyEmailMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthVerifyEmail>>, TError,{params?: PostApiAuthVerifyEmailParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiAuthVerifyEmail>>, TError,{params?: PostApiAuthVerifyEmailParams}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAuthVerifyEmail>>, {params?: PostApiAuthVerifyEmailParams}> = (props) => {
          const {params} = props ?? {};

          return  postApiAuthVerifyEmail(params,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiAuthVerifyEmailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAuthVerifyEmail>>>
    
    export type PostApiAuthVerifyEmailMutationError = ErrorType<ProblemDetails>

    /**
 * @summary Verify a user's email address
 */
export const usePostApiAuthVerifyEmail = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthVerifyEmail>>, TError,{params?: PostApiAuthVerifyEmailParams}, TContext>, }
) => {
    
      const mutationOptions = getPostApiAuthVerifyEmailMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * Requires unverified email
 * @summary Resend a user's email verification email
 */
export const postApiAuthResendVerifyEmail = (
    params?: PostApiAuthResendVerifyEmailParams,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Auth/ResendVerifyEmail`, method: 'post',
        params
    },
      );
    }
  


export const getPostApiAuthResendVerifyEmailMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthResendVerifyEmail>>, TError,{params?: PostApiAuthResendVerifyEmailParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiAuthResendVerifyEmail>>, TError,{params?: PostApiAuthResendVerifyEmailParams}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAuthResendVerifyEmail>>, {params?: PostApiAuthResendVerifyEmailParams}> = (props) => {
          const {params} = props ?? {};

          return  postApiAuthResendVerifyEmail(params,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiAuthResendVerifyEmailMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAuthResendVerifyEmail>>>
    
    export type PostApiAuthResendVerifyEmailMutationError = ErrorType<unknown>

    /**
 * @summary Resend a user's email verification email
 */
export const usePostApiAuthResendVerifyEmail = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthResendVerifyEmail>>, TError,{params?: PostApiAuthResendVerifyEmailParams}, TContext>, }
) => {
    
      const mutationOptions = getPostApiAuthResendVerifyEmailMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Send a password reset email to a user
 */
export const postApiAuthSendPasswordReset = (
    authSendPasswordResetRequestBody: BodyType<AuthSendPasswordResetRequestBody>,
    params?: PostApiAuthSendPasswordResetParams,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Auth/SendPasswordReset`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: authSendPasswordResetRequestBody,
        params
    },
      );
    }
  


export const getPostApiAuthSendPasswordResetMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthSendPasswordReset>>, TError,{data: BodyType<AuthSendPasswordResetRequestBody>;params?: PostApiAuthSendPasswordResetParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiAuthSendPasswordReset>>, TError,{data: BodyType<AuthSendPasswordResetRequestBody>;params?: PostApiAuthSendPasswordResetParams}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAuthSendPasswordReset>>, {data: BodyType<AuthSendPasswordResetRequestBody>;params?: PostApiAuthSendPasswordResetParams}> = (props) => {
          const {data,params} = props ?? {};

          return  postApiAuthSendPasswordReset(data,params,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiAuthSendPasswordResetMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAuthSendPasswordReset>>>
    export type PostApiAuthSendPasswordResetMutationBody = BodyType<AuthSendPasswordResetRequestBody>
    export type PostApiAuthSendPasswordResetMutationError = ErrorType<unknown>

    /**
 * @summary Send a password reset email to a user
 */
export const usePostApiAuthSendPasswordReset = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthSendPasswordReset>>, TError,{data: BodyType<AuthSendPasswordResetRequestBody>;params?: PostApiAuthSendPasswordResetParams}, TContext>, }
) => {
    
      const mutationOptions = getPostApiAuthSendPasswordResetMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * @summary Reset a user's password
 */
export const postApiAuthResetPassword = (
    authResetPasswordRequestBody: BodyType<AuthResetPasswordRequestBody>,
    params?: PostApiAuthResetPasswordParams,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/Auth/ResetPassword`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: authResetPasswordRequestBody,
        params
    },
      );
    }
  


export const getPostApiAuthResetPasswordMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthResetPassword>>, TError,{data: BodyType<AuthResetPasswordRequestBody>;params?: PostApiAuthResetPasswordParams}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiAuthResetPassword>>, TError,{data: BodyType<AuthResetPasswordRequestBody>;params?: PostApiAuthResetPasswordParams}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiAuthResetPassword>>, {data: BodyType<AuthResetPasswordRequestBody>;params?: PostApiAuthResetPasswordParams}> = (props) => {
          const {data,params} = props ?? {};

          return  postApiAuthResetPassword(data,params,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiAuthResetPasswordMutationResult = NonNullable<Awaited<ReturnType<typeof postApiAuthResetPassword>>>
    export type PostApiAuthResetPasswordMutationBody = BodyType<AuthResetPasswordRequestBody>
    export type PostApiAuthResetPasswordMutationError = ErrorType<ProblemDetails>

    /**
 * @summary Reset a user's password
 */
export const usePostApiAuthResetPassword = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiAuthResetPassword>>, TError,{data: BodyType<AuthResetPasswordRequestBody>;params?: PostApiAuthResetPasswordParams}, TContext>, }
) => {
    
      const mutationOptions = getPostApiAuthResetPasswordMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    