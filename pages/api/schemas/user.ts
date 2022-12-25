import { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
});

export default models.User || model('User', userSchema);
