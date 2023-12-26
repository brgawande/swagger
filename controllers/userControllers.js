import { catchAsyncError } from "../middlewares/catchAsyncError.js";

export const getstring = catchAsyncError(async (req, res, next) => {
  res.send("this is a new string");
});
