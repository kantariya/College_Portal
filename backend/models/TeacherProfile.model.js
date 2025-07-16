import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },

  qualifications: [{
    degree: { type: String, enum: ['Bachelor', 'Master', 'PhD'] },
    cgpa: Number
  }]
});

const TeacherProfile = mongoose.model('TeacherProfile', teacherSchema);
export default TeacherProfile;
