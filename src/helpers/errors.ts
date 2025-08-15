import { AxiosError } from 'axios';

export const getErrorMessage = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response?.data) {
      return error.response.data.message || error.response.data;
    }

    return error.message;
  }

  if (error instanceof Error) return error.message;

  if (typeof error === 'string') return error;

  return 'unknown error! please try again later!';
};
