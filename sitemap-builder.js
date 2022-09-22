require('babel-register')({
	presets: ['es2015', 'react'],
});

const router = require('./src/navigation/router').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router)
	.build('https://bujnicka-dent.pl')
	.save('./public/sitemap.xml');
