import mongoose from 'mongoose';

const incidentSchema = new mongoose.Schema({
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentProfile', required: true },
  description: String,
  dateReported: { type: Date, default: Date.now }
});

const Incident = mongoose.model('Incident', incidentSchema);
export default Incident;
