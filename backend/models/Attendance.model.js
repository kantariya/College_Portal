import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentProfile', required: true },
  date: { type: Date, required: true },
  subject: { type: String, required: true },
  present: { type: Boolean, default: false }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
export default Attendance;
