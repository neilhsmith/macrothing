import { ErrorComponent, Router, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "@/route-tree.gen"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/query-client"
import { IPublicClientApplication } from "@azure/msal-browser"

import { Spinner } from "@/components/ui/spinner"
import { MsalProvider } from "@azure/msal-react"

import { Center } from "@/components/ui/center"

const router = new Router({
  routeTree,
  defaultPendingComponent: () => (
    <div className="flex grow">
      <Center>
        <Spinner speed="slow" className="w-20 h-20 text-slate-300" />
      </Center>
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
    <QueryClientProvider client={queryClient}>
      <MsalProvider instance={pca}>
        <RouterProvider
          router={router}
          defaultPreload="intent"
          context={{ msalInstance: pca }}
        />
      </MsalProvider>
    </QueryClientProvider>
  )
}
