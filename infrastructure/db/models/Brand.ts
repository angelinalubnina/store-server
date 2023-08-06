import { Schema, model } from 'mongoose';

const BrandSchema = new Schema({
    name: { type: String, unique: true, required: true },
});

export default model('Brand', BrandSchema);
