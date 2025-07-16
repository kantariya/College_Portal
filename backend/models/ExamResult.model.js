import mongoose from 'mongoose';

const examResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentProfile', required: true },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },

  internalMarks: [{
    subject: String,
    marks: Number
  }],

  externalGrades: [{
    subject: String,
    grade: String
  }],

  overallCGPA: Number
}, { timestamps: true });

const ExamResult = mongoose.model('ExamResult', examResultSchema);
export default ExamResult;
