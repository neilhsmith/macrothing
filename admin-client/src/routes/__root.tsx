import { IPublicClientApplication, InteractionType } from "@azure/msal-browser"
import { MsalAuthenticationTemplate } from "@azure/msal-react"
import { QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

type RootRouteContext = {
  msalInstance: IPublicClientApplication
  queryClient: QueryClient
}

export const Route = rootRouteWithContext<RootRouteContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
      <div className="min-h-screen flex flex-col">
        <header role="banner" className="border-b">
          <div className="container flex justify-between items-center">
            <h1 className="text-2xl py-2">Macrothing</h1>
            <nav role="navigation">
              <ul className="flex gap-x-4">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/brands">Brands</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="flex-1 container py-8">
          <Outlet />
        </div>
      </div>
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </MsalAuthenticationTemplate>
  )
}
