import { QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Link, Outlet, rootRouteWithContext } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

export const Route = rootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <header role="banner" className="border-b">
          <div className="container flex justify-between items-center">
            <h1 className="text-2xl py-2">Macrothing</h1>
            <nav role="navigation">
              <ul className="flex gap-x-4">
                <li>
                  <Link to="/">Home</Link>
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
    </>
  )
}