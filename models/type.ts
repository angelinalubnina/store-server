import { Schema, model } from 'mongoose';

const TypeSchema = new Schema({
    name: { type: String, unique: true, required: true },
});

export default model('Type', TypeSchema);
