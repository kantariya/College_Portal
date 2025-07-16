import mongoose from 'mongoose';

const feePaymentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'StudentProfile', required: true },
  amount: Number,
  semester: { type: Number, required: true },
  paymentDate: Date,
  status: { type: String, enum: ['paid', 'pending'], default: 'pending' }
});

const FeePayment = mongoose.model('FeePayment', feePaymentSchema);
export default FeePayment;
