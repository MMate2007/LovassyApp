/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Blueboard
 * OpenAPI spec version: v4.0.0
 */
import type { ImageVotingsCreateImageVotingResponseImageVotingAspect } from './imageVotingsCreateImageVotingResponseImageVotingAspect';

export interface ImageVotingsCreateImageVotingResponse {
  id?: number;
  name?: string | null;
  description?: string | null;
  type?: string | null;
  aspects?: ImageVotingsCreateImageVotingResponseImageVotingAspect[] | null;
  active?: boolean;
  showUploaderInfo?: boolean;
  uploaderUserGroupId?: number;
  bannedUserGroupId?: number | null;
  maxUploadsPerUser?: number;
  createdAt?: string;
  updatedAt?: string;
}
