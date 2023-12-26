export const errorMiddlewares = (err, req, res, next) => {
  err.message = err.message || "internal Servere Error";
  err.statusCode = err.statusCode || 500;

  res.status(500).json({
    success: false,
    message: err.message,
  });
  next();
};
