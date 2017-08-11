import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BlogPage from './BlogPage';
import PostPage from './PostPage';

export default class App extends React.Component {
	render () {
		return (
			<Router>
				<Switch>
					<Route path="/blog/post/:id">
						<PostPage {...this.props} />
					</Route>
					<Route path="/blog">
						<BlogPage {...this.props} />
					</Route>
					<Route>
						<HomePage {...this.props} />
					</Route>
				</Switch>
			</Router>
		);
	}
};
