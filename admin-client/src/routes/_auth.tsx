import { FileRoute, redirect } from "@tanstack/react-router"

export const Route = new FileRoute("/_auth").createRoute({
  beforeLoad: ({ context, location }) => {
    const { msalInstance } = context
    const account = msalInstance.getActiveAccount()

    if (!account) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      })
    }

    return {
      account,
    }
  },
})
