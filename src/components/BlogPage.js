import React from 'react';
import PostsList from './blog/PostsList';

export default class BlogPage extends React.Component {
	render () {
		return (
			<div>
				<div className="row column">
					<h4 style={{ margin: 0 }} className="text-center">Newsy</h4>
				</div>
				<hr />
				<div className="row">
					<section className="large-8 columns" style={{ borderRight: '1px solid #E3E5E8' }}>
						<PostsList posts={this.props.posts} />
					</section>
				</div>
			</div>
		);
	}
};
