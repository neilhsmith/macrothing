import { Button } from "@/components/ui/button"
import { useIsAuthenticated, useMsal } from "@azure/msal-react"
import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/").createRoute({
  component: IndexRouteComponent,
})

function IndexRouteComponent() {
  const { instance } = useMsal()
  const isAuthenticated = useIsAuthenticated()

  return isAuthenticated ? (
    <div>todo: timeline</div>
  ) : (
    <Button
      onClick={() =>
        instance.loginRedirect({
          scopes: [
            "https://macrothing.onmicrosoft.com/macrothing-api/Api.Read",
            "https://macrothing.onmicrosoft.com/macrothing-api/Api.Write",
          ],
          state: "abc123",
        })
      }
    >
      login
    </Button>
  )
}
