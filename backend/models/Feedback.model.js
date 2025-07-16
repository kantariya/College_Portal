import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentProfile', required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'TeacherProfile', required: true },
  rating: { type: Number, min: 1, max: 5 },
  comments: String,
  date: { type: Date, default: Date.now }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
