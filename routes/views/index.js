var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		posts: [],
		streamers: [],
	};

	view.on('init', function (next) {
		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10,
			filters: {
				state: 'published',
			},
		})
			.sort('-publishedDate')
			.populate('author categories');


		q.exec(function (err, results) {
			locals.data.posts = results;
			next(err);
		});
	});

	view.on('init', function (next) {
		let q = keystone.list('TwitchStreamer').model.find();

		q.exec(function (err, results) {
			locals.data.streamers = results;
			next(err);
		});
	});

	// Render the view
	view.render('index');
};
