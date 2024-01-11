import { Schema, model } from "mongoose";
 
const ContactSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    Username: {
        type: String,
        required: [true, "Username is required"]
    },
    FirstName: {
        type: String,
        required: [true, "First name is required"]
    },
    LastName: {
        type: String,
        required: [true, "Last name is required"]
    },
    Password: {
        type: String,
        required: [true, "Password is required"]
    },
    Token: {
        type: String
      }
}, { collection: 'Users' });
 
const ContactModel = model('ContactModel', ContactSchema);
 
export default ContactModel;
 