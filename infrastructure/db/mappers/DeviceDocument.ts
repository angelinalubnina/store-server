import { Document, Schema } from 'mongoose';

export interface DeviceDocument extends Document {
    name: string;
    brand: Schema.Types.ObjectId;
    type: Schema.Types.ObjectId;
    price: number;
    rating: number;
    images: string[];
    description: string;
    availableColors: Schema.Types.ObjectId[];
  }