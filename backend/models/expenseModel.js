
const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
			maxLength: 60,
		},
		amount: {
			type: Number,
			required: true,
			maxLength: 20,
			trim: true,
		},
		type: {
			type: String,
			default: 'Expense',
		},
		date: {
			type: Date,
			required: true,
			trim: true,
		},
		category: {
			type: String,
			required: true,
			maxLength: 20,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			maxLength: 50,
			trim: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Expense', ExpenseSchema);
