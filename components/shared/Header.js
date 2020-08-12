import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap'
import { useState } from 'react'

const SmartLink = (props) => {
	const { title, href } = props
	return (
		<NavItem>
			<Link href={href}>
				<a className="nav-link">
					{ title }
				</a>
			</Link>
		</NavItem>	
	)
}

const SmartNavbarBrand = () => {
	return (
		<Link href="/">
			<a className="navbar-brand">WATDO</a>
		</Link>
	)
}

const LoginLink = () => {
	return (
		<a className="nav-link" href="/api/v1/login">Login</a>	
	)
}

const LogoutLink = () => {
	return (
		<a className="nav-link" href="/api/v1/logout">Logout</a>	
	)
}

const Header = ({ user, loading }) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)

	return (
		<>
			<Navbar color="light" light expand="md">
				<SmartNavbarBrand />
				<NavbarToggler onClick={() => toggle()} />
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar>
						{ user &&
							<>
								<SmartLink title="About" href="/about" />
								<SmartLink title="Admin Panel" href="/adminPanel" />
								<SmartLink title="Admin Panel SSR" href="/adminPanelSSR" />
							</>
						}
					</Nav>
					<Nav navbar>
						{ !loading &&
							<>
								{ user &&
									<NavItem>
										<LogoutLink />
									</NavItem>
								}
								{ !user &&
									<NavItem>
										<LoginLink />
									</NavItem>
								}
							</> 
						}
					</Nav>
				</Collapse>
			</Navbar>
		</>
	)
}

export default Header