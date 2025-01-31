const path = require('path');

module.exports = {
	entry: {
		main: path.join(__dirname, 'src', 'main.js'),
		sidebar: path.join(__dirname, 'src', 'sidebar.js'),
		'personal-settings': path.join(__dirname, 'src', 'main-personal-settings.js'),
	},
	output: {
		path: path.resolve(__dirname, './js/dist/'),
		publicPath: '/js/',
		filename: '[name].js',
		chunkFilename: 'files.[id].js'
	}
}
