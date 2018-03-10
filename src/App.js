import React from 'react';
// import logo from './logo.svg';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
// import {addExpense} from "./actions/expenses";
// import getVisibleExpense from "./selectors/expenses";
import './firebase/firebase';
// import DotEnv from 'dotenv';
// import './playground/promises';
// console.log(process.env.REACT_APP_API_URL);
// console.log(process.env.REACT_APP_FIREBASE_API_KEY);
// console.log(process.env.FIREBASE_API_KEY);

const store = configureStore();
// store.dispatch(addExpense({description:'water bill', amount:4500,createdAt:500}));
// store.dispatch(addExpense({description:'gas bill', createdAt:1000}));
// store.dispatch(addExpense({description:'rent', amount:109500,createdAt:100}));
// // store.dispatch(setTextFilter('water'));
// const state = store.getState();
// const visibleExpenses = getVisibleExpense(state.expenses, state.filters);

// console.log(process.env.FIREBASE_API_KEY,'kk');
// console.log(visibleExpenses);

const jsx =() => (
    <Provider store={store} >
        <AppRouter/>
    </Provider>
);



export default jsx;
