import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/brands/$brandId").createRoute({
  component: BrandDetailRouteComponent,
})

function BrandDetailRouteComponent() {
  return <div>brand detail route component</div>
}
