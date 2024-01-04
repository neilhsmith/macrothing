import { helloWorldQueryOptions } from "@/tests/tests-api"
import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/test").createRoute({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(helloWorldQueryOptions()),
  component: TestRouteComponent,
  errorComponent: () => <div>todo: error</div>,
})

function TestRouteComponent() {
  const result = Route.useLoaderData()

  return <div>test route component - {result}</div>
}
