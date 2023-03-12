/** @format */
const IncomeSchema = require('../models/incomeModel');

exports.addIncome = async (req, res) => {
	const { title, amount, category, description, date } = req.body;

	const income = IncomeSchema({
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
		await income.save();		
		res.status(200).json({ massage: 'Income added successfully'});
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}

	console.log(income);
};

exports.getIncomes = async (req, res) => {
	try {
		const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
		res.status(200).json(incomes);
	} catch (error) {
		res.status(500).json({ message: 'Server error' });
	}
};

exports.deleteIncome = async (req, res) => {
	const { id } = req.params;
	IncomeSchema.findByIdAndDelete(id)
		.then((income) => {
			res.status(200).json({ message: 'Income successfully deleted' });
		})
		.catch((error) => {
			res.status(500).json({ message: 'Server Error' });
		});
};
