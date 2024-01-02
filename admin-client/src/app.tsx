import { ErrorComponent, Router, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "@/route-tree.gen"
import { queryClient } from "@/query-client"
import { IPublicClientApplication } from "@azure/msal-browser"

import { Spinner } from "@/components/ui/spinner"

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
    msalInstance: undefined!,
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

export function App({ pca }: { pca: IPublicClientApplication }) {
  // TODO: connect the pca's navigate to useNavigate

  return (
    <RouterProvider
      router={router}
      defaultPreload="intent"
      context={{ msalInstance: pca }}
    />
  )
}
