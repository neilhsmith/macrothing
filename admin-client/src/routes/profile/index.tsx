import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/profile/").createRoute({
  component: ProfileIndexComponent,
})

function ProfileIndexComponent() {
  return (
    <div>
      <p>profile index component</p>
    </div>
  )
}
