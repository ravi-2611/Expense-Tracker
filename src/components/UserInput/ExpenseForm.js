import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [input, setInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevData) => {
      return { ...prevData, [name]: value };
    });
  }
  function handleSubmission(event) {
    event.preventDefault();
    props.onAdd(input);
    setInput({
      title: "",
      amount: "",
      date: "",
    });
  }

  return (
    <form onSubmit={handleSubmission}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={handleInput}
            value={input.title}
            name="title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="1"
            onChange={handleInput}
            value={input.amount}
            name="amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-08-15"
            max="2023-06-01"
            onChange={handleInput}
            value={input.date}
            name="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
