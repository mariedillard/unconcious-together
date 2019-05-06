import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewUser from './NewUser';
import Timer from './Timer'; 
import Error404 from './Error404';

function App(){
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={NewUser} />
                <Route path='/together' component={Timer} />
                <Route component={Error404} />
            </Switch>
        </div>
    );
}

export default App;