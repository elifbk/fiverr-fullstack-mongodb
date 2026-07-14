import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        unique: [true, "This username is already in use."],
        required: [true, "The username field cannot be left blank."],
    },
    email: {
        type: String,
        unique: [true, "This email address is already in use. "],
        required: [true, "The email field cannot be left blank."],
    },
    password: {
        type: String,
        required: [true, "The password field cannot be left blank."],
    },
    country: {
        type: String,
        required: [true, "The country field cannot be left blank."],
    },
    profilePicture: {
        type: String,
        default: "default",
    },
    isSeller: {
        type: Boolean,
        default: false,
    },
    phone: {
        type: String,
    },
    description: {
        type: String,
    },
},
    {
        timestamps: true, versionKey: false,
        toJSON: {
            // veri json formatına çevrilirken çalışır
            transform: function (doc, ret: any) {
                ret.id = ret._id
                delete ret._id
                delete ret.password
                return ret
            }
        }
    }
);

const User = model("User", userSchema)

export default User