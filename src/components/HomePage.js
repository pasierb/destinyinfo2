import React from 'react';
import PostsList from './blog/PostsList';
import StreamersList from './streamers/StreamersList';
import FacebookProvider, { Page as FacebookPage } from 'react-facebook';

export default class HomePage extends React.Component {
	render () {
		return (
			<div>
				<div className="twitch-section">
					<div className="row columns">
						<StreamersList
							streamers={this.props.streamers}
							twitchClientId={process.env.TWITCH_CLIENT_ID}
							showOffline={false} />
					</div>
				</div>
				<div className="row">
					<section className="large-8 columns">
						<h4 style={{ margin: 0 }} className="section-header">
							<span>Najnowsze wpisy</span>
						</h4>
						<PostsList posts={this.props.posts} />
					</section>
					<div className="large-4 columns">
						<FacebookProvider appId={process.env.FACEBOOK_APP_ID}>
							<FacebookPage href={process.env.FACEBOOK_PAGE_HREF} className="panel" height={700} />
						</FacebookProvider>
					</div>
				</div>
			</div>
		);
	}
};
