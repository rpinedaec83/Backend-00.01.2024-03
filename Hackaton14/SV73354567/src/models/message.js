import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default model('Message', messageSchema);