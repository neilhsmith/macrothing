import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/brands/").createRoute({
  component: BrandsIndexRouteComponent,
})

function BrandsIndexRouteComponent() {
  return <div>brands index route component</div>
}
