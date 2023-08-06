import { Schema, model } from 'mongoose';

const UserRatingSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    deviceId: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
    value: { type: Number, required: true },
});

export default model('UserRating', UserRatingSchema);
