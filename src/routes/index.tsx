import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/").createRoute({
  component: RootIndexComponent,
})

function RootIndexComponent() {
  return <div>root index component</div>
}
