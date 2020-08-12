import auth0 from '../../../utils/auth0'

export default async function login(req, res) {
	try {
		await auth0.handleLogin(req, res)
	} catch (err) {
		console.log(err)
		res.status(err.status || 400).end(err.message)
	}
}