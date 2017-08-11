import React from 'react';
import PostListItem from './PostListItem';

export default function PostList (props) {
	return (
		<div>
			{props.posts.results.map(post => (<PostListItem post={post} key={post._id} />))}
		</div>
	);
};
