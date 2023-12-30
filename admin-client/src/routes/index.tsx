import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/").createRoute({
  component: RootIndexComponent,
})

function RootIndexComponent() {
  return (
    <div>
      <p>root index component</p>
    </div>
  )
}
