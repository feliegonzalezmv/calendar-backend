import { Schema, model } from "mongoose";

const EventSchema = new Schema({
  title: { type: String, require: true },
  notes: { type: String },
  start: { type: Date, require: true },
  end: { type: Date, require: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export default model("Event", EventSchema);
