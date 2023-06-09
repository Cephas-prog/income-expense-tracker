/** @format */

const { addIncome, getIncomes, deleteIncome } = require('../controllers/incomeTransaction');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenseTransaction');

const router = require('express').Router();

router
	.post('/add-income', addIncome)
	.get('/get-incomes', getIncomes)
	.delete('/delete-income/:id', deleteIncome)
	.post('/add-expense', addExpense)
	.get('/get-expenses', getExpenses)
	.delete('/delete-expense/:id', deleteExpense)

module.exports = router;
