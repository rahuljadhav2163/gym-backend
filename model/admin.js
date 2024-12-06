import { Schema, model } from "mongoose"

const Userschema = new Schema({
    mobile: {
        type: "String",
        unique: true
    },
    password: {
        type: "String",
        required: true,
    },
}
)

const Admin = model('Admin', Userschema);
export default Admin;