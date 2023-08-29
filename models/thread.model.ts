import mongoose from "mongoose";

/**
 * Thread schema for MongoDB
 * @typedef {Object} ThreadSchema
 * @property {string} text - The text of the thread
 * @property {mongoose.Schema.Types.ObjectId} author - The author of the thread
 * @property {mongoose.Schema.Types.ObjectId} [community] - The community the thread belongs to
 * @property {Date} [createdAt] - The date the thread was created
 * @property {string} [parentId] - The ID of the parent thread, if any
 * @property {mongoose.Schema.Types.ObjectId[]} [children] - The IDs of the child threads, if any
 */
const threadSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  community: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thread",
    },
  ],
});

/**
 * Thread model for MongoDB
 * @typedef {Object} ThreadModel
 * @property {string} text - The text of the thread
 * @property {mongoose.Schema.Types.ObjectId} author - The author of the thread
 * @property {mongoose.Schema.Types.ObjectId} [community] - The community the thread belongs to
 * @property {Date} [createdAt] - The date the thread was created
 * @property {string} [parentId] - The ID of the parent thread, if any
 * @property {mongoose.Schema.Types.ObjectId[]} [children] - The IDs of the child threads, if any
 */
const Thread = mongoose.models.Thread || mongoose.model("Thread", threadSchema);

export default Thread;