// src/utils/handleWithSQLError.ts
import { handleSQLError } from './sqlErrorHandler'; // your custom error parser

export const handleWithSQLError = async <T>(fn: () => Promise<T>): Promise<T> => {
  try {
    return await fn();
  } catch (error) {
    handleSQLError(error);
    throw new Error("Something went wrong while processing your request.");
  }
};
