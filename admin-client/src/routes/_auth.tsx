import { InteractionType } from "@azure/msal-browser"
import { MsalAuthenticationTemplate } from "@azure/msal-react"
import { FileRoute, Outlet } from "@tanstack/react-router"

export const Route = new FileRoute("/_auth").createRoute({
  component: AuthRouteComponent,
})

function AuthRouteComponent() {
  return (
    <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <Outlet />
    </MsalAuthenticationTemplate>
  )
}
