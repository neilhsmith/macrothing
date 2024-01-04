import { Header } from "@/components/app/header"
import { IPublicClientApplication } from "@azure/msal-browser"
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
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex flex-1 container py-8">
          <Outlet />
        </div>
      </div>
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  )
}
