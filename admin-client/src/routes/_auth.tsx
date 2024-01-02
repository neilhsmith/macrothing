import { FileRoute, redirect } from "@tanstack/react-router"

export const Route = new FileRoute("/_auth").createRoute({
  beforeLoad: ({ context, location }) => {
    const { msalInstance } = context
    const account = msalInstance.getActiveAccount()
    let user: unknown

    if (!account) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      })
    } else {
      user = {} // TODO: get the user record from the api
    }

    return {
      account,
      user,
    }

    /**
     * if not logged in:
     * - store the location param in storage (we'll redirect to it after the oidc-callback redirect)
     * - redirect to the login page
     * when oidc-callback is hit:
     * - redirect to the stored location & clear the stored var
     * ** if/when we are redirected or nav to a route under _auth, the active account will be found and initate a fetch user op here & add it to context
     * ** all the oidc-callback needs to do is redirect to the stored location or to a default route if one isn't stored
     *
     * if logged in:
     * - get the user either from tanstack-query cache or api
     * - add the user to router context
     */
  },
})
