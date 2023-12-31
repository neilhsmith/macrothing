import { FileRoute, useRouter } from "@tanstack/react-router"
import { z } from "zod"

export const Route = new FileRoute("/login")
  .createRoute({
    validateSearch: z.object({
      redirect: z.string().optional(),
    }),
  })
  .update({
    component: LoginComponent,
  })

function LoginComponent() {
  const router = useRouter()
  const { msalInstance } = Route.useRouteContext()
  const { redirect } = Route.useSearch()

  return <div>need to login message & button which starts the login flow</div>
}
