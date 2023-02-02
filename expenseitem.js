import React from "react";
import ExpenseDate from './expenseDate';
import ExpenseDetail from './expenseDetails';
import Card from '../UI/card'
import './expenseitem.css'
function Expenseitem(props) {


    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetail title={props.title} amount={props.amount} destination={props.destination} />
        </Card>
    )
}

export default Expenseitem;