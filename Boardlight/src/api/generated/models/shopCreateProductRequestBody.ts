/**
 * Generated by orval v6.16.0 🍺
 * Do not edit manually.
 * Blueboard
 * OpenAPI spec version: v4.0.0
 */
import type { ShopCreateProductRequestBodyInput } from './shopCreateProductRequestBodyInput';

export interface ShopCreateProductRequestBody {
  name: string;
  description: string;
  richTextContent: string;
  visible: boolean;
  qrCodeActivated: boolean;
  qrCodes: number[];
  price: number;
  quantity: number;
  inputs: ShopCreateProductRequestBodyInput[];
  notifiedEmails: string[];
  thumbnailUrl: string;
}
