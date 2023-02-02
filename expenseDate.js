import React from "react";
import "./expenseDate.css"


function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-us", { month: "long" })
    const date = props.date.getDate()
    const year = props.date.getFullYear()
    return (
        <div className="expense-date">
            <div expense-date__year>{year}</div>
            <div expense-date__month>{month}</div>
            <div expense-date__day>{date}</div>
        </div>
    )

}

export default ExpenseDate;