import express from "express";
import { connect } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";  
import { createMember,getAllUsers, loginMember } from "./controller/user.js";
import { loginadmin, postadmin } from "./controller/admin.js";
import { addworkout, getworkout } from "./controller/workout.js";
dotenv.config();
const app = express();

app.use(cors());  
app.use(express.json());


const connectDB = async () => {
  try {
    const conn = await connect("mongodb+srv://rahuljadhav7057461164:rahul2163@cluster0.yhice.mongodb.net/Reg");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  
  }
};

app.get('/', (req, res) => {
  res.send('server is running')
})


app.post('/api/createmember', createMember )
app.get('/api/getallusers', getAllUsers )
app.post('/api/loginuser', loginMember )
app.post('/api/admin-register', postadmin )
app.post('/api/adminlogin', loginadmin )
app.post('/api/addworkout', addworkout )
app.post('/api/getworkouts/:phone', getworkout )

app.listen(5000, () => {
  console.log("Server is running on port 5000");
  connectDB();
});

