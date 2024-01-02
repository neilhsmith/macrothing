import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/_auth/profile").createRoute({
  component: ProfileRouteComponent,
})

function ProfileRouteComponent() {
  return <div className="p-2 space-y-2">profile route component</div>
}
