import { Route as rootRoute } from "./routes/__root"
import { Route as AuthGuardRoute } from "./routes/_auth-guard"
import { Route as IndexRoute } from "./routes"
import { Route as BrandsBrandIdRoute } from "./routes/brands/$brandId"
import { Route as BrandsIndexRoute } from "./routes/brands"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/_auth-guard": {
      parentRoute: typeof rootRoute
    }
    "/brands/": {
      parentRoute: typeof rootRoute
    }
    "/brands/$brandId": {
      parentRoute: typeof rootRoute
    }
  }
}

Object.assign(IndexRoute.options, {
  path: "/",
  getParentRoute: () => rootRoute,
})

Object.assign(AuthGuardRoute.options, {
  id: "/_auth-guard",
  getParentRoute: () => rootRoute,
})

Object.assign(BrandsIndexRoute.options, {
  path: "/brands/",
  getParentRoute: () => rootRoute,
})

Object.assign(BrandsBrandIdRoute.options, {
  path: "/brands/$brandId",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AuthGuardRoute,
  BrandsIndexRoute,
  BrandsBrandIdRoute,
])
