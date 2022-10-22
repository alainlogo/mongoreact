const mongoose = require('mongoose')

const Post = new mongoose.Schema(
	{
		// id_user: { type: String},
		content: { type: String },
	},
	{ collection: 'post' }
)

const model = mongoose.model('PostData', Post)

module.exports = model