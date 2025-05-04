// utils/sqlErrorHandler.ts

export class AppError extends Error {
    statusCode: number;
  
    constructor(message: string, statusCode = 500) {
      super(message);
      this.statusCode = statusCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export const handleSQLError = (error: any): never => {
    switch (error.code) {
      case 'ER_NO_REFERENCED_ROW_2':
        throw new AppError("Foreign key constraint failed: Referenced record does not exist", 400);
  
      case 'ER_DUP_ENTRY':
        throw new AppError("Duplicate entry: The value you're trying to insert already exists", 400);
  
      case 'ER_BAD_NULL_ERROR':
        throw new AppError("Missing required field", 400);
      case 'ER_BAD_NOT_FOUND':
        throw new AppError("Id does not exists", 400);
  
      default:
        console.error("Unhandled SQL Error:", error);
        throw new AppError("Internal Server Error", 500);
    }
  };
  