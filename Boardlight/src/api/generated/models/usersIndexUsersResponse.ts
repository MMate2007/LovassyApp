/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Blueboard
 */
import type { UsersIndexUsersResponseUserGroup } from './usersIndexUsersResponseUserGroup';

export interface UsersIndexUsersResponse {
  id?: string;
  name?: string | null;
  email?: string | null;
  emailVerifiedAt?: string | null;
  realName?: string | null;
  class?: string | null;
  userGroups?: UsersIndexUsersResponseUserGroup[] | null;
  createdAt?: string;
  updatedAt?: string;
}
