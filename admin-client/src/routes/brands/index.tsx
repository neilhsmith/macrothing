import { FileRoute, Outlet } from "@tanstack/react-router"

export const Route = new FileRoute("/brands/").createRoute({
  component: BrandsIndexComponent,
})

function BrandsIndexComponent() {
  return (
    <div>
      <p>brands index component</p>
      <Outlet />
    </div>
  )
}