import { Route as rootRoute } from "./routes/__root"
import { Route as LoginRoute } from "./routes/login"
import { Route as AuthRoute } from "./routes/_auth"
import { Route as IndexRoute } from "./routes"
import { Route as AuthProfileRoute } from "./routes/_auth/profile"
import { Route as AuthBrandsBrandIdRoute } from "./routes/_auth/brands/$brandId"
import { Route as AuthBrandsIndexRoute } from "./routes/_auth/brands"

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
    "/_auth/profile": {
      parentRoute: typeof AuthRoute
    }
    "/_auth/brands/": {
      parentRoute: typeof AuthRoute
    }
    "/_auth/brands/$brandId": {
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

Object.assign(AuthProfileRoute.options, {
  path: "/profile",
  getParentRoute: () => AuthRoute,
})

Object.assign(AuthBrandsIndexRoute.options, {
  path: "/brands/",
  getParentRoute: () => AuthRoute,
})

Object.assign(AuthBrandsBrandIdRoute.options, {
  path: "/brands/$brandId",
  getParentRoute: () => AuthRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthRoute.addChildren([
    AuthProfileRoute,
    AuthBrandsIndexRoute,
    AuthBrandsBrandIdRoute,
  ]),
  LoginRoute,
])
