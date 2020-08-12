import BaseLayout from '../components/layouts/BaseLayout.js'
import BasePage from '../components/BasePage'
import { useGetUser } from '../actions/user'
import { isAuthorizedNavbar } from '@/utils/auth0'

const Index = ({ user }) => {
	const { loading } = useGetUser()

	return (
		<BaseLayout user={user} loading={loading}>
			<BasePage>
				<h1>HOME</h1>
				<hr />
				<div>
					<p>When you initially load the page, the navbar above will show links for About and Login.</p>
					<p>When not authenticated, both of these links will route you to login via Auth0 with Github, Google, and Basic auth options.</p>
					<p>Once you login and are authenticated, you should be able to navigate to the About page and your login link should now be Logout instead.</p>
				</div>
			</BasePage>
		</BaseLayout>
	)
}

export const getServerSideProps = async ({ req, res }) => {
	const user = await isAuthorizedNavbar(req, res)
	return {
		props: { user }
	}
}

export default Index