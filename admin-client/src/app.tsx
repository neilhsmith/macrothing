import { ErrorComponent, Router, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "@/route-tree.gen"
import { queryClient } from "@/query-client"
import { PublicClientApplication } from "@azure/msal-browser"

import { Spinner } from "@/components/ui/spinner"
import { msalConfig } from "@/auth/auth-config"

const msalInstance = new PublicClientApplication(msalConfig)

const router = new Router({
  routeTree,
  defaultPendingComponent: () => (
    <div className="p-2 text-2xl">
      <Spinner />
    </div>
  ),
  defaultErrorComponent: ({ error }: { error: unknown }) => (
    <ErrorComponent error={error} />
  ),
  context: {
    msalInstance,
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

export function App() {
  return <RouterProvider router={router} defaultPreload="intent" />
}
