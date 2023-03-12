/** @format */
const ExpenseSchema = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
	const { title, amount, category, description, date } = req.body;

	const expense = ExpenseSchema({
		title,
		amount,
		category,
		description,
		date	
	});
	// validations
	try {
		if (!title || !category || !description || !date) {
			return res.status(400).json({ message: 'All fields must be filled in' })
		}
		if (amount <= 0 || !amount === 'number') {
			return res.status(400).json({ message: 'Must be positive Number' })
		}
		await expense.save();		
		res.status(200).json({ massage: 'Expense added successfully'});
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}

	console.log(expense);
};

exports.getExpenses = async (req, res) => {
	try {
		const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
		res.status(200).json(expenses);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};

exports.deleteExpense = async (req, res) => {
	const { id } = req.params;
	ExpenseSchema.findByIdAndDelete(id)
		.then((expense) => {
			res.status(200).json({ message: 'Expense successfully deleted' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Server Error' });
		});
};
