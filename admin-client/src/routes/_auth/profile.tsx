import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/_auth/profile").createRoute({
  component: ProfileComponent,
})

function ProfileComponent() {
  const { account } = Route.useRouteContext()

  return (
    <div className="p-2 space-y-2">
      <div>profile</div>
      <pre>{JSON.stringify(account, null, 2)}</pre>
    </div>
  )
}
