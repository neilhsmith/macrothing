import { ErrorComponent, Router, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "@/route-tree.gen"
import { queryClient } from "@/query-client"

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
