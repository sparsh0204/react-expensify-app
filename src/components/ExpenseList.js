import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpense from "../selectors/expenses";
import {startSetExpenses} from "../actions/expenses";


// const ExpenseList = (props) => (
//     <div>
//         <h1>Expense List</h1>
//         {props.expenses.map((expense) => {
//             return <ExpenseListItem key={expense.id} {...expense} />
//         })}
//     </div>
// );
class ExpenseList extends React.Component{
    componentDidMount() {
        this.props.startSetExpenses()
    }
    render () {
        return (
            <div>
                <h1>Expense List</h1>
                {this.props.expenses.map((expense) => {
                    return <ExpenseListItem key={expense.id} {...expense} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        expenses: getVisibleExpense(state.expenses,state.filters)
    };
};
const mapDispatchToProps = (dispatch,props) => ({
    startSetExpenses: () => dispatch(startSetExpenses())
});

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseList);