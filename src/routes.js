import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './page/Logon';
import Register from './page/Register';
import Profile from './page/Profile'
import NewIncident from './page/NewIncident';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Logon} />
               <Route path="/register" component={Register} />
               <Route path="/profile" component={Profile} />
               <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}