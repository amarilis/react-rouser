import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRoute} from 'react-router';

import AppRoot from './app-root.jsx';
import AddArticle from './article-add.jsx';
import ArticleList from './article-list.jsx';
import UserPage from './user-page.jsx';
  /*import List from './user.jsx';*/

const AppRouter = () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={AppRoot}>
                <IndexRoute component={ArticleList}/>
                <Route path="/article-add" component={AddArticle} />
                <Route path="/user/:id" component={UserPage} />
                {/*<Route path="/user/:id" component={User} />
                <Route path="/add-article" component={ArticleList} />
                 <IndexRoute component={Articles} title="zxcv"/>*/}
            </Route>
        </Router>
    );
};

if(typeof window !== 'undefined') {
    ReactDOM.render(<AppRouter />, document.getElementById("app"));
}

export default AppRouter;