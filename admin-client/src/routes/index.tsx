import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/").createRoute({
  component: IndexRouteComponent,
})

function IndexRouteComponent() {
  return (
    <div>
      <p>the index route component</p>
      <p>
        renders public info & link to login/register (if not already loged in)
      </p>
    </div>
  )
}
