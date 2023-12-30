import { Route as rootRoute } from "./routes/__root"
import { Route as IndexRoute } from "./routes/index"
import { Route as BrandsBrandIdRoute } from "./routes/brands/$brandId"
import { Route as ProfileIndexRoute } from "./routes/profile/index"
import { Route as BrandsIndexRoute } from "./routes/brands/index"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/brands/": {
      parentRoute: typeof rootRoute
    }
    "/profile/": {
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

Object.assign(BrandsIndexRoute.options, {
  path: "/brands/",
  getParentRoute: () => rootRoute,
})

Object.assign(ProfileIndexRoute.options, {
  path: "/profile/",
  getParentRoute: () => rootRoute,
})

Object.assign(BrandsBrandIdRoute.options, {
  path: "/brands/$brandId",
  getParentRoute: () => rootRoute,
})

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  BrandsIndexRoute,
  ProfileIndexRoute,
  BrandsBrandIdRoute,
])
