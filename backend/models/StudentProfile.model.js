import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },

  collegeId: { type: String, required: true, unique: true },
  rollNo: { type: String, required: true, unique: true },
  currentSemester: { type: Number, required: true },

  parentMobile: { type: String },

  education: [{
    degree: { type: String }, // SSC, HSC
    percentage: Number
  }]
});

const StudentProfile = mongoose.model('StudentProfile', studentSchema);
export default StudentProfile;
