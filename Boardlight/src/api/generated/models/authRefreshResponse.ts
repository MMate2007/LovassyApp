/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Blueboard
 * OpenAPI spec version: 4.1.0
 */
import type { AuthRefreshResponseUser } from './authRefreshResponseUser';

export interface AuthRefreshResponse {
  user?: AuthRefreshResponseUser;
  token?: string | null;
  refreshToken?: string | null;
  refreshTokenExpiration?: string;
}
