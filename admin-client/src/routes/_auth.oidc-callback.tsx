import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/_auth/oidc-callback").createRoute({
  component: () => <div>oidc callback route component</div>,
})
