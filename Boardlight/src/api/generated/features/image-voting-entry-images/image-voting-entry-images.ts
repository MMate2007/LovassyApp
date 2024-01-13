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
  ImageVotingsIndexImageVotingEntryImagesResponse,
  ProblemDetails,
  GetApiImageVotingEntryImagesParams,
  ImageVotingsUploadImageVotingEntryImageResponse,
  PostApiImageVotingEntryImagesBody
} from '../../models'
import { useCustomClient } from '../../../customClient';
import type { ErrorType, BodyType } from '../../../customClient';

type AwaitedInput<T> = PromiseLike<T> | T;

      type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;


/**
 * Requires verified email; Requires one of the following permissions: ImageVotings.IndexOwnImageVotingEntryImages, ImageVotings.IndexImageVotingEntryImages
 * @summary List all images of an image voting
 */
export const getApiImageVotingEntryImages = (
    params?: GetApiImageVotingEntryImagesParams,
 signal?: AbortSignal
) => {
      return useCustomClient<ImageVotingsIndexImageVotingEntryImagesResponse[]>(
      {url: `/Api/ImageVotingEntryImages`, method: 'get',
        params, signal
    },
      );
    }
  

export const getGetApiImageVotingEntryImagesQueryKey = (params?: GetApiImageVotingEntryImagesParams,) => [`/Api/ImageVotingEntryImages`, ...(params ? [params]: [])] as const;
  

    
export const getGetApiImageVotingEntryImagesQueryOptions = <TData = Awaited<ReturnType<typeof getApiImageVotingEntryImages>>, TError = ErrorType<void | ProblemDetails>>(params?: GetApiImageVotingEntryImagesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiImageVotingEntryImages>>, TError, TData>, }
): UseQueryOptions<Awaited<ReturnType<typeof getApiImageVotingEntryImages>>, TError, TData> & { queryKey: QueryKey } => {
const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetApiImageVotingEntryImagesQueryKey(params);

  
  
    const queryFn: QueryFunction<Awaited<ReturnType<typeof getApiImageVotingEntryImages>>> = ({ signal }) => getApiImageVotingEntryImages(params, signal);
    
      
      
   return  { queryKey, queryFn, ...queryOptions}}

export type GetApiImageVotingEntryImagesQueryResult = NonNullable<Awaited<ReturnType<typeof getApiImageVotingEntryImages>>>
export type GetApiImageVotingEntryImagesQueryError = ErrorType<void | ProblemDetails>

/**
 * @summary List all images of an image voting
 */
export const useGetApiImageVotingEntryImages = <TData = Awaited<ReturnType<typeof getApiImageVotingEntryImages>>, TError = ErrorType<void | ProblemDetails>>(
 params?: GetApiImageVotingEntryImagesParams, options?: { query?:UseQueryOptions<Awaited<ReturnType<typeof getApiImageVotingEntryImages>>, TError, TData>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetApiImageVotingEntryImagesQueryOptions(params,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}

/**
 * Requires verified email; Requires one of the following permissions: ImageVotings.UploadActiveImageVotingEntryImage, ImageVotings.UploadImageVotingEntryImage
 * @summary Upload an image to be used in an image voting entry
 */
export const postApiImageVotingEntryImages = (
    postApiImageVotingEntryImagesBody: BodyType<PostApiImageVotingEntryImagesBody>,
 ) => {const formData = new FormData();
if(postApiImageVotingEntryImagesBody.ImageVotingId !== undefined) {
 formData.append('ImageVotingId', postApiImageVotingEntryImagesBody.ImageVotingId.toString())
 }
if(postApiImageVotingEntryImagesBody.File !== undefined) {
 formData.append('File', postApiImageVotingEntryImagesBody.File)
 }

      return useCustomClient<ImageVotingsUploadImageVotingEntryImageResponse>(
      {url: `/Api/ImageVotingEntryImages`, method: 'post',
      headers: {'Content-Type': 'multipart/form-data', },
       data: formData
    },
      );
    }
  


export const getPostApiImageVotingEntryImagesMutationOptions = <TError = ErrorType<void | ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiImageVotingEntryImages>>, TError,{data: BodyType<PostApiImageVotingEntryImagesBody>}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof postApiImageVotingEntryImages>>, TError,{data: BodyType<PostApiImageVotingEntryImagesBody>}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postApiImageVotingEntryImages>>, {data: BodyType<PostApiImageVotingEntryImagesBody>}> = (props) => {
          const {data} = props ?? {};

          return  postApiImageVotingEntryImages(data,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type PostApiImageVotingEntryImagesMutationResult = NonNullable<Awaited<ReturnType<typeof postApiImageVotingEntryImages>>>
    export type PostApiImageVotingEntryImagesMutationBody = BodyType<PostApiImageVotingEntryImagesBody>
    export type PostApiImageVotingEntryImagesMutationError = ErrorType<void | ProblemDetails>

    /**
 * @summary Upload an image to be used in an image voting entry
 */
export const usePostApiImageVotingEntryImages = <TError = ErrorType<void | ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postApiImageVotingEntryImages>>, TError,{data: BodyType<PostApiImageVotingEntryImagesBody>}, TContext>, }
) => {
    
      const mutationOptions = getPostApiImageVotingEntryImagesMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    /**
 * Requires verified email; Requires one of the following permissions: ImageVotings.DeleteOwnImageVotingEntryImage, ImageVotings.DeleteImageVotingEntryImage
 * @summary Delete an image meant for an image voting entry
 */
export const deleteApiImageVotingEntryImagesId = (
    id: number,
 ) => {
      return useCustomClient<void>(
      {url: `/Api/ImageVotingEntryImages/${id}`, method: 'delete'
    },
      );
    }
  


export const getDeleteApiImageVotingEntryImagesIdMutationOptions = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiImageVotingEntryImagesId>>, TError,{id: number}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteApiImageVotingEntryImagesId>>, TError,{id: number}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteApiImageVotingEntryImagesId>>, {id: number}> = (props) => {
          const {id} = props ?? {};

          return  deleteApiImageVotingEntryImagesId(id,)
        }

        

 
   return  { mutationFn, ...mutationOptions }}

    export type DeleteApiImageVotingEntryImagesIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteApiImageVotingEntryImagesId>>>
    
    export type DeleteApiImageVotingEntryImagesIdMutationError = ErrorType<ProblemDetails>

    /**
 * @summary Delete an image meant for an image voting entry
 */
export const useDeleteApiImageVotingEntryImagesId = <TError = ErrorType<ProblemDetails>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteApiImageVotingEntryImagesId>>, TError,{id: number}, TContext>, }
) => {
    
      const mutationOptions = getDeleteApiImageVotingEntryImagesIdMutationOptions(options);
     
      return useMutation(mutationOptions);
    }
    