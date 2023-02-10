import "./ExpenseDate.css";
import Card from "../UI/Card";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <Card className="expense-date">
      <div className="expense-date__month">
        <h2>{month}</h2>
      </div>
      <div className="expense-date__day">
        <h2>{day}</h2>
      </div>
      <div className="expense-date__year">
        <h2>{year}</h2>
      </div>
    </Card>
  );
}
export default ExpenseDate;
