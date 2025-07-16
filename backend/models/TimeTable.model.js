import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
  date: { type: Date, required: true },

  entries: [{
    subject: { type: String, required: true },
    type: { type: String, enum: ['lecture', 'lab'], required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'TeacherProfile' },

    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  }]
});

const Timetable = mongoose.model('Timetable', timetableSchema);
export default Timetable;
