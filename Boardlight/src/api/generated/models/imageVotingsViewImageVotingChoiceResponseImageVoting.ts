/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Blueboard
 */
import type { ImageVotingsViewImageVotingChoiceResponseImageVotingAspect } from './imageVotingsViewImageVotingChoiceResponseImageVotingAspect';

export interface ImageVotingsViewImageVotingChoiceResponseImageVoting {
  id?: number;
  name?: string | null;
  description?: string | null;
  type?: string | null;
  aspects?: ImageVotingsViewImageVotingChoiceResponseImageVotingAspect[] | null;
  active?: boolean;
  showUploaderInfo?: boolean;
  superIncrementAllowed?: boolean;
  superIncrementValue?: number;
  createdAt?: string;
  updatedAt?: string;
}
