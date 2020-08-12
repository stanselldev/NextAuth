const path = require('path')
const dotenv = require('dotenv-webpack')

console.log('next config loaded')

module.exports = {
	webpack: (config) => {
		config.resolve.alias['@'] = path.resolve(__dirname)
		config.plugins.push(new dotenv({ silent: true }))
		return config
	},
	env: {
		AUTH0_NAMESPACE: process.env.AUTH0_NAMESPACE
	}
}