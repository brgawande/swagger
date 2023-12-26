import mongoose from "mongoose";

const useSchema = new mongoose.Schema(
  {
    id: {
      type: integer,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", useSchema);
