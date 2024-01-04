import { loginRequest } from "@/auth/msal"
import { Header } from "@/components/app/header"
import { IPublicClientApplication, InteractionType } from "@azure/msal-browser"
import { MsalAuthenticationTemplate } from "@azure/msal-react"
import { QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Outlet, rootRouteWithContext } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

type RootRouteContext = {
  msalClient: IPublicClientApplication
  queryClient: QueryClient
}

export const Route = rootRouteWithContext<RootRouteContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={loginRequest}
    >
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 container py-8">
          <Outlet />
        </div>
      </div>
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </MsalAuthenticationTemplate>
  )
}
