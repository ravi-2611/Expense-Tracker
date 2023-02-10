import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  return (
    <div className="new-expense">
      <ExpenseForm onAdd={props.onAdd}/>
    </div>
  );
}

export default NewExpense;
