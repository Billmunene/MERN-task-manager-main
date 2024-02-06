const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
  
    // Default status code to 500 (Internal Server Error) if not specified
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({
      error: {
        message: message
      }
    });
  };
  
  module.exports = errorHandler;