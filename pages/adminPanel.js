import BaseLayout from '@/components/layouts/BaseLayout.js'
import BasePage from '@/components/BasePage'
import withAuth from '@/hoc/withAuth'

const AdminPanel = ({ user, loading }) => {
	return (
  		<BaseLayout user={user} loading={loading}>
	    	<BasePage>
	    		<h1>ADMIN PANEL</h1>
	    		<hr />
	    		<h2>Welcome {user && user.nickname}</h2>
	    	</BasePage>
	    </BaseLayout>
    )
}

export default withAuth(AdminPanel)('admin')