/* eslint-disable import/no-anonymous-default-export */
import ErrorHandler from '../utils/errorHandler';

export default (err, _req, res, _next) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  //Wrong Mongoose Object ID Error
  if (err.name === 'CastError') {
    const message = `Resource not found. Invalid ${err.path}`
    error = new ErrorHandler(message, 400);
  }

  // Handling mongoose validation errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(value => value.message).join('. ');
    error = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
