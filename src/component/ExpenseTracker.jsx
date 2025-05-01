import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../ExpenseTracker.css';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({ title: '', amount: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (expense.title && expense.amount) {
      setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
      setExpense({ title: '', amount: '' });
    } else {
      alert('Please fill out both fields.');
    }
  };

  const total = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);

  return (
    <div className="tracker-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to Login
      </button>

      <h2>Expense Tracker</h2>

      <form onSubmit={handleAddExpense} className="expense-form">
        <input
          type="text"
          name="title"
          value={expense.title}
          onChange={handleChange}
          placeholder="Expense Title"
        />
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <button type="submit">Add Expense</button>
      </form>

      <div className="expense-list">
        <h3>Expenses:</h3>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul>
            {expenses.map((exp) => (
              <li key={exp.id}>
                {exp.title} - PKR {exp.amount}
              </li>
            ))}
          </ul>
        )}
        {expenses.length > 0 && (
          <h4 style={{ marginTop: '1rem' }}>Total: PKR {total.toFixed(2)}</h4>
        )}
      </div>
    </div>
  );
}

export default ExpenseTracker;
