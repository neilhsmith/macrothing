import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/_auth-guard").createRoute({
  beforeLoad: ({ context, location }) => {
    // if not logged in, redirect
  },
})
