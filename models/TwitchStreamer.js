const keystone = require('keystone');

const TwitchStreamer = new keystone.List('TwitchStreamer', {
	map: { name: 'username' },
});

TwitchStreamer.add({
	username: { type: String, required: true },
});

TwitchStreamer.defaultColumns = 'username';
TwitchStreamer.register();
