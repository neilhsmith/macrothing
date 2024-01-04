import { FileRoute } from "@tanstack/react-router"

/**
 * TODO: use this route as the oauth callback
 * - if a redirect url is found in the msal state or session storage or whatever, use it
 */

export const Route = new FileRoute("/").createRoute({
  component: IndexRouteComponent,
})

function IndexRouteComponent() {
  return <div>todo: timeline</div>
}
