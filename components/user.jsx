import React, {Component} from 'react';
import {Link} from 'react-router';


class User extends Component {
    render(){
        return (
            <Link className="header-navigation__link articleUserLink" to="/user/0">
                <span>User User</span>
                <img src="http://placehold.it/32x32" alt=""/>
            </Link>
        );
    }
};

export default User;