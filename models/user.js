const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, default: 'USER' },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
});

export default model('User', UserSchema);
