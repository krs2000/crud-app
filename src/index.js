import React from "react";
import ReactDOM from "react-dom";
import Home from './Components/Home';
import Edit from './Components/Edit';
import Add from './Components/Add';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose  } from 'redux';
import {set_users } from "./actions";
import thunk from 'redux-thunk';

const middleware =applyMiddleware(thunk);

const store =createStore(reducer, 
	compose(middleware,
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
	);


store.dispatch(set_users())


ReactDOM.render(
	<Provider store={store}>
	 <Router>
	 <Switch>
        <Route exact path="/" component={Home}/>
       	 <Route  path="/edit/:userId" component={Edit} />
         <Route  path="/newUser" component={Add}/>
        </Switch>
      </Router></Provider>
, document.getElementById('root')

	)



