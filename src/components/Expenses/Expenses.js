import ExpenseItems from "./ExpenseItems";
import NewExpense from "../UserInput/NewExpense";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";
const startingExpenses = [
  {
    title: "Smart Watch",
    amount: 1000,
    date: "2019, 12, 14",
  },
  { title: "New TV", amount: 30000, date: "2020, 1, 12" },
  { title: "Shirt", amount: 1300, date: "2021, 5, 12" },
  { title: "Books", amount: 400, date: "2022, 9, 12" },
  { title: "Jacket", amount: 2000, date: "2023, 1, 12" },
  { title: "Hoodie", amount: 900, date: "2023, 2, 12" },
  { title: "Jeans", amount: 1499, date: "2022, 11, 12" },
  { title: "Wireless Mouse", amount: 600, date: "2021, 10, 12" },
  { title: "Laptop", amount: 35000, date: "2020, 6, 12" },
  { title: "Ear Buds", amount: 1600, date: "2019, 10, 12" },
  { title: "Bike", amount: 100000, date: "2020, 5, 12" },
  { title: "Laptop Screen", amount: 7000, date: "2021, 7, 12" },
  { title: "Laptop Repair", amount: 1000, date: "2022, 4, 12" },
  { title: "Sweater", amount: 1899, date: "2023, 3, 12" },
  { title: "Sweatshirt", amount: 600, date: "2019, 9, 12" },
];


function Expenses() {
  const [expenses, setExpenses]=useState(startingExpenses);
  function addNewExpense(newExpense){
    setExpenses((prevExpenses)=>{
        return [newExpense, ...prevExpenses]
    })
}
  const [filteredYear, setFilteredYear]=useState("2023")
  function filterYear(selectedYear){
    setFilteredYear(selectedYear);
  }
  const filteredExpenses=expenses.filter(expense=>{
    return new Date(expense.date).getFullYear()===Number(filteredYear)
  })
  return (
    <Card className="expenses">
      <NewExpense onAdd={addNewExpense} />
      <ExpensesFilter handleFilter={filterYear} selected={filteredYear} />
      <ExpensesChart items={filteredExpenses}/>
      {filteredExpenses.map((expense, index) => {
        return (
          <ExpenseItems
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={new Date(expense.date)}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
