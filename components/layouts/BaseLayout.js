import Header from '../shared/Header'

const BaseLayout = (props) => {
	const { className, user, loading, children } = props

	return (
		<>
			<Header user={user} loading={loading} />
			{children}
		</>
	)
}

export default BaseLayout
