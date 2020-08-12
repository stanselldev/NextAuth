import auth0 from '../../../utils/auth0'

export default async function logout(req, res) {
	try {
		await auth0.handleLogout(req, res)
	} catch (err) {
		console.log(err)
		res.status(err.status || 400).end(err.message)
	}
}