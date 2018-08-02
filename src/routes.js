import React from 'react';
import App from './App';
import Profile from './components/profile';
import AddNew from './components/addNew';
import { Switch, Route } from 'react-router';

const Routes =()=> {
    return(
        <Switch>
            <Route exact path="/" component= {App}/>
            <Route exact path="/login/profile" component= {Profile}/>
            <Route exact path="/login/addNew" component = {AddNew} />
        </Switch>  
    )
}
export default Routes;