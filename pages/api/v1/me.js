import auth0 from '../../../utils/auth0'

export default async function me(req, res) {
	try {
		await auth0.handleProfile(req, res)
	} catch (err) {
		console.log(err)
		res.status(err.status || 400).end(err.message)
	}
}