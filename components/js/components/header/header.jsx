import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import App from '../app/app'
import Language from '../language/language';

class Header extends React.Component {
    render() {
        return (
        <div>
            <ul>
            <li>
                <NavLink to="/index">App</NavLink>
            </li>
            <li>
                <NavLink to="/language">Language</NavLink>
            </li>
            </ul>
    
            <Switch>
                <Route path="/index" component={() => <App persons={this.props.data} />}/>
                <Route path="/language" component={Language} />
            </Switch>
        </div>
        );
    }
}

export default Header;