import { Route as rootRoute } from "./routes/__root"
import { Route as LoginRoute } from "./routes/login"
import { Route as AuthRoute } from "./routes/_auth"
import { Route as IndexRoute } from "./routes"
import { Route as AuthProfileRoute } from "./routes/_auth.profile"
import { Route as AuthOidcCallbackRoute } from "./routes/_auth.oidc-callback"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/_auth": {
      parentRoute: typeof rootRoute
    }
    "/login": {
      parentRoute: typeof rootRoute
    }
    "/_auth/oidc-callback": {
      parentRoute: typeof AuthRoute
    }
    "/_auth/profile": {
      parentRoute: typeof AuthRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(AuthRoute.options, {
  id: "/_auth",
  getParentRoute: () => rootRoute,
})

Object.assign(LoginRoute.options, {
  path: "/login",
  getParentRoute: () => rootRoute,
})

Object.assign(AuthOidcCallbackRoute.options, {
  path: "/oidc-callback",
  getParentRoute: () => AuthRoute,
})

Object.assign(AuthProfileRoute.options, {
  path: "/profile",
  getParentRoute: () => AuthRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthRoute.addChildren([AuthOidcCallbackRoute, AuthProfileRoute]),
  LoginRoute,
])
