import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import getVisibleExpense from "../selectors/expenses";
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expenseTotal/100).format('$0,0.00');
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h1>
        </div>
    )
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpense(state.expenses, state.filters)

    return{
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);