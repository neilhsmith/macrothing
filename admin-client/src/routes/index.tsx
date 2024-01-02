import { Button } from "@/components/ui/button"
import { useIsAuthenticated } from "@azure/msal-react"
import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/").createRoute({
  component: IndexRouteComponent,
})

function IndexRouteComponent() {
  const { msalInstance } = Route.useRouteContext()
  const isAuthenticated = useIsAuthenticated()

  return isAuthenticated ? (
    <div>todo: timeline</div>
  ) : (
    <Button
      onClick={() =>
        msalInstance.loginRedirect({ scopes: ["openid"], state: "abc123" })
      }
    >
      login
    </Button>
  )
}
