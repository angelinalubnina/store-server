import { Schema, model } from 'mongoose';

const ColorSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, unique: true, require: true },
});

export default model('Color', ColorSchema);
