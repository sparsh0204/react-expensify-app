import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {startSetExpenses} from "./actions/expenses";
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import AppRouter from './routers/AppRouter';



const store = configureStore();
const  App =() => (
    <Provider store={store} >
        <AppRouter/>
    </Provider>
);

// ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
//
// store.dispatch(startSetExpenses()).then(() => {
//     ReactDOM.render(<App />, document.getElementById('root'));
//
// });
ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
