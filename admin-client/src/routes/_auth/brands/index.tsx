import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/_auth/brands/").createRoute({
  component: BrandsIndexComponent,
})

function BrandsIndexComponent() {
  return (
    <div>
      <p>brands index component</p>
    </div>
  )
}
