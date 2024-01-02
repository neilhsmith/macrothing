import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/login").createRoute({
  component: LoginRouteComponent,
})

function LoginRouteComponent() {
  return (
    <div>
      <p>login copy</p>
    </div>
  )
}
