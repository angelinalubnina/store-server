import { Schema, model, Document } from 'mongoose';

const DeviceSchema = new Schema({
    name: { type: String, unique: true, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
    type: { type: Schema.Types.ObjectId, ref: 'Type', required: true },
    price: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    images: { type: [String], default: [] },
    description: { type: String, default: 'Описание', required: true },
    availableColors: { type: [Schema.Types.ObjectId], ref: 'Color', required: true }
});

const DeviceModel = model('Device', DeviceSchema);
export default DeviceModel;