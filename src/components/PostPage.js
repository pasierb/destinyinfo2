import React from 'react';
import Post, { PostImage } from './blog/Post';

export default class PostPage extends React.Component {
	render () {
		const post = this.props.post;

		return (
			<div>
				<div className="dark-section">
					<div className="row columns">
						<PostImage post={post} />
					</div>
				</div>
				<div className="row">
          <div className="columns">
            <Post post={post} />
          </div>
        </div>
      </div>
		);
	}
};
