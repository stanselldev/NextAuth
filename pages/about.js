import BaseLayout from '@/components/layouts/BaseLayout.js'
import BasePage from '@/components/BasePage'
import { authorizeUser } from '@/utils/auth0'

const About = ({ user }) => {
	return (
  		<BaseLayout user={user} loading={false}>
	    	<BasePage>
	    		<h1>ABOUT</h1>
	    		<hr />
	    		<h2>Welcome {user && user.nickname}</h2>
	    	</BasePage>
	    </BaseLayout>
    )
}

export const getServerSideProps = async ({ req, res }) => {
	const user = await authorizeUser(req, res)
	return {
		props: { user }
	}
}

export default About