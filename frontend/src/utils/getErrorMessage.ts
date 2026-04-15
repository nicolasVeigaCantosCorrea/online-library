import axios from 'axios';
import type { ApiError } from '../types/api';
import { toast } from 'react-hot-toast';

export function getErrorMessage(error: unknown): string {
  console.group('RAW ERROR');
  console.error(error);
  console.groupEnd();
  if (!axios.isAxiosError<ApiError>(error)) {
    return 'Unexpected error';
  }

  const apiError = error.response?.data?.error;

  // string error
  if (typeof apiError === 'string') {
    return apiError;
  }

  // validation object: { field: [messages] }
  if (apiError && typeof apiError === 'object') {
    for (const [field, messages] of Object.entries(apiError)) {
      if (Array.isArray(messages) && messages.length > 0) {
        return `${field}: ${messages[0]}`;
      }
    }
  }

  return 'Request failed';
}

export function showError(error: unknown) {
  const msg = getErrorMessage(error);
  toast.error(msg || 'Unknown error');
}
