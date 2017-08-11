import React from 'react';

export function PostImage (props) {
	const url = props.post.image ? props.post.image.url : '/images/logo_full.png';

	return (
		<img src={url} />
	);
}

export default function Post (props) {
	const { post } = props;

	return (
    <article>
			<p dangerouslySetInnerHTML={{ __html: post.content.brief }}></p>
			<p dangerouslySetInnerHTML={{ __html: post.content.extended }}></p>
		</article>
	);
}
