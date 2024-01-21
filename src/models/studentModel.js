import mongoose from "mongoose";
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    required: [true, "please provide student name!"],
  },
  fatherName: {
    type: String,
    required: [true, "please provide student father name!"],
  },
  dateOfBirth: {
    type: Date,
    required: [true, "please provide student date of birth!"],
  },
  grNo: {
    type: Number,
    required: [true, "please provide student GR number!"],
    unique: true,
  },
  image: {
    type: String,
    required: [true, "please provide student image!"],
  },
  address: {
    type: String,
    required: [true, "please provide student address!"],
  },
  phoneNo: {
    type: String,
    required: [true, "please provide student phone number!"],
  },
  emailId: {
    type: String,
    required: [true, "please provide student email id!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please provide a password!"],
  },
  isVerified: {
    type: Boolean,
    defult: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpirt: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

//in case of nextjs, check whether model is already created
//use the model if already exist otherwise create it
const Student =
  mongoose.models.students || mongoose.model("students", studentSchema);

export default Student;
