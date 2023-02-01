import './expenseitem.css'
function Expenseitem(props) {

    return (
        <div className='expense-item'>
            <div>{props.date.toDateString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <h4>{props.destination}</h4>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default Expenseitem;