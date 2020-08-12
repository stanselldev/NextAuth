import BaseLayout from '@/components/layouts/BaseLayout.js'
import BasePage from '@/components/BasePage'
import { authorizeUser, withAuth } from '@/utils/auth0'

const AdminPanelSSR = ({ user }) => {
	return (
  		<BaseLayout user={user} loading={false}>
	    	<BasePage>
	    		<h1>Admin Panel SSR</h1>
	    		<hr />
	    		<h2>Welcome {user && user.nickname}</h2>
	    	</BasePage>
	    </BaseLayout>
    )
}

export const getServerSideProps = withAuth(async ({ req, res }) => {
	const user = await authorizeUser(req, res)
	return {
		props: { user }
	}
})('admin')

export default AdminPanelSSR