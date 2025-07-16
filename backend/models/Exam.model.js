import mongoose from 'mongoose';

const examSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['internal', 'external'], required: true },
  semester: { type: Number, required: true },
  examDate: Date
});

const Exam = mongoose.model('Exam', examSchema);
export default Exam;
