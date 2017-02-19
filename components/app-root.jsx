import React from 'react';
import {Link} from 'react-router';

import User from './user.jsx';
import ArticleList from './article-list.jsx';



const AppRoot = React.createClass ({
    // корневой блок страницы,
    render() {


        return (
            <div className="allPage">

                <header className="header">
                    header
                    <br/>
                    <Link className="header-navigation__link" to="/">Home</Link>
                    <nav className="header-user articleUser">
                        <User data={this.props.data} user={this.props.user}/>
                        <br/>
                        <Link className="header-navigation__link addArticle" to="/article-add">Add article</Link>
                    </nav>
                    <br className="header-clear"/>
                </header>

                <div className="content">
                    content<br/>

                    {this.props.children}

                </div>

                <footer className="footer">
                    footer<br/>
                </footer>

            </div>
        );
    }
});

export default AppRoot;