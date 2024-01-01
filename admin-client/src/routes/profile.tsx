import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/profile").createRoute({
  component: ProfileComponent,
})

function ProfileComponent() {
  return (
    <div className="p-2 space-y-2">
      <div>profile</div>
    </div>
  )
}
