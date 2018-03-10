import React from 'react';
// import logo from './logo.svg';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from "./actions/expenses";
// import getVisibleExpense from "./selectors/expenses";
import './firebase/firebase';
import ReactDOM from "react-dom";


export default AppRouter;
// const store = configureStore();
//
// let App = () => (
//     <p>Loading</p>
// );
//
// store.dispatch(startSetExpenses()).then(() => {
//     App =() => (
//         <Provider store={store} >
//             <AppRouter/>
//         </Provider>
//     );
// });
// ReactDOM.render(<App />, document.getElementById('root'));






