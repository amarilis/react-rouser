import express from 'express';
import request from 'request';
import React, {Component} from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, createRoutes} from 'react-router';

import appRouter from '../components/router.jsx';

const routes = createRoutes(appRouter());

class DataProvider extends Component {
  getChildContext() {
    return {data: this.props.data};
  }
  render() {
    return <RouterContext {...this.props}/>;
  }
}
DataProvider.propTypes = {
  data: React.PropTypes.object
};
DataProvider.childContextTypes = {
  data: React.PropTypes.object
};

/*eslint-disable*/
const router = express.Router();
/*eslint-enable*/

/* GET home page. */
router.get('/', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      const content = renderToString(<RouterContext {...renderProps}/>);
      res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found');
    }
  });
});
router.get('/article-add', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
      if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
          const content = renderToString(<RouterContext {...renderProps}/>);
          res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found 123');
    }
  });
});
router.get('/user/:id', (req, res) => {
  match({routes, location: req.url}, (error, redirectLocation, renderProps) => {
      console.log('renderProps '+ renderProps);
      if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
          const content = renderToString(<RouterContext {...renderProps}/>);
          res.render('index', {title: 'Express', data: false, content});
    } else {
      res.status(404).send('Not Found 123');
    }
  });
});

module.exports = router;
