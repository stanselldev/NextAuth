import { initAuth0 } from '@auth0/nextjs-auth0';

const auth0 = initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI,
  session: {
    // The secret used to encrypt the cookie.
    cookieSecret: process.env.AUTH0_COOKIE_SECRET

    // The cookie lifetime (expiration) in seconds. Set to 8 hours by default.
    //cookieLifetime: 60 * 60 * 8,
    // (Optional) The cookie domain this should run on. Leave it blank to restrict it to your domain.
    //cookieDomain: 'your-domain.com',
    // (Optional) SameSite configuration for the session cookie. Defaults to 'lax', but can be changed to 'strict' or 'none'. Set it to false if you want to disable the SameSite setting.
    //cookieSameSite: 'lax',
    // (Optional) Store the id_token in the session. Defaults to false.
    //storeIdToken: false,
    // (Optional) Store the access_token in the session. Defaults to false.
    //storeAccessToken: false,
    // (Optional) Store the refresh_token in the session. Defaults to false.
    //storeRefreshToken: false
  }
});

export default auth0

export const isAuthorizedRole = (user, role) => {
  return user && user[process.env.AUTH0_NAMESPACE + '/roles'].includes(role)
}

export const isAuthorizedNavbar = async (req, res) => {
  const session = await auth0.getSession(req)
  if (!session || !session.user) {
    return null
  } else {
    return session.user
  }
}

export const authorizeUser = async (req, res) => {
  const session = await auth0.getSession(req)
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/v1/login'
    })
    res.end()
    return null
  }

  return session.user
}

export const withAuth = () => role => async ({ req, res }) => {
  const session = await auth0.getSession(req)
  if (!session || !session.user || (role && !isAuthorizedRole(session.user, role))) {
    res.writeHead(302, {
      Location: '/api/v1/login'
    })
    res.end()
    return { props: {} }
  }

  return { props: { user: session.user } }
}
