import { Schema, model } from 'mongoose';

const DeviceSchema = new Schema({
    name: { type: String, unique: true, required: true },
    brandName: { type: String, required: true },
    typeName: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    images: { type: [String], default: [] },
    description: { type: String, required: true },
    availableColors: { type: [Schema.Types.ObjectId], ref: 'Color', required: true }
});

export default model('Device', DeviceSchema);
