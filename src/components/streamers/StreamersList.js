import React from 'react';
import TwitchUserStatus from 'react-twitch-user-status';

export default function StreamersList (props) {
	return (
		<ul className="menu">
			{props.streamers.map(streamer => (
				<li key={streamer._id} className="panel hoverable">
					<TwitchUserStatus
						twitchClientId={props.twitchClientId}
						showOffline={props.showOffline}
						username={streamer.username}
						livePoll={60000} />
				</li>
			))}
		</ul>
	);
}
