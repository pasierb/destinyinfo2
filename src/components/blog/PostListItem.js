import React from 'react';
import FaIcon from '../common/FaIcon';
import { PostImage } from './Post';
import moment from 'moment';

export default function PostListItem (props) {
	const post = props.post;
	const postUrl = `/blog/post/${post.slug}`;

	return (
		<article className="row panel hoverable">
			<div className="large-5 columns" style={{ padding: 0 }}>
				<a href={postUrl}><PostImage post={post} /></a>
			</div>
			<div className="large-7 columns">
				<p className="post-details">
					{post.categories && (<span>
						{post.categories.map(category => (
							<a href={`/blog/${category.key}`} className="tag" key={category._id}>{category.name}</a>
						))}
					</span>)}
					<span className="published-date">{moment(post.publishedDate).format('DD.MM.YYYY')}</span>
				</p>
				<h4 className="post-title">
					<a href={postUrl}>{post.title}</a>
				</h4>
				<div dangerouslySetInnerHTML={{ __html: post.content.brief }} style={{ overflow: 'hidden' }}></div>
			</div>
		</article>
	);
};
