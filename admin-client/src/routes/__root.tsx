import { Header } from "@/components/app/header"
import { Center } from "@/components/ui/center"
import { Spinner } from "@/components/ui/spinner"
import {
  IPublicClientApplication,
  InteractionStatus,
} from "@azure/msal-browser"
import { useMsal } from "@azure/msal-react"
import { QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Outlet, rootRouteWithContext } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

type RootRouteContext = {
  msalInstance: IPublicClientApplication
  queryClient: QueryClient
}

export const Route = rootRouteWithContext<RootRouteContext>()({
  component: RootComponent,
})

function RootComponent() {
  const { inProgress: authStatus } = useMsal()
  const loading = authStatus !== InteractionStatus.None

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {loading ? (
          <Center>
            <Spinner size="72" speed="slow" className="text-slate-400" />
          </Center>
        ) : (
          <>
            <Header />
            <div className="flex-1 container py-8">
              <Outlet />
            </div>
          </>
        )}
      </div>
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </>
  )
}
