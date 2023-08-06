import { Schema, model } from 'mongoose';

const RatingSchema = new Schema({
    deviceId: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
    averageValue: { type: Number, required: true },
});

export default model('Rating', RatingSchema);
