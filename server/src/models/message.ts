import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage extends Document {
  username: string;
  messageTime: Date;
  messageContent: string;
}

const MessageSchema: Schema = new Schema({
  username: { type: String, required: true },
  messageTime: { type: Date, required: true },
  messageContent: { type: String, required: true }
});

export const Message = mongoose.model<IMessage>('Message', MessageSchema);
