const keystone = require('keystone');
var Types = keystone.Field.Types;

const Page = new keystone.List('Page', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Page.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	body: { type: Types.Html, wysiwyg: true, height: 400 },
});

Page.defaultColumns = 'title';
Page.register();
