import { Route as rootRoute } from "./routes/__root"
import { Route as ProfileRoute } from "./routes/profile"
import { Route as LoginRoute } from "./routes/login"
import { Route as IndexRoute } from "./routes"
import { Route as BrandsBrandIdRoute } from "./routes/brands/$brandId"
import { Route as BrandsIndexRoute } from "./routes/brands"

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      parentRoute: typeof rootRoute
    }
    "/login": {
      parentRoute: typeof rootRoute
    }
    "/profile": {
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

Object.assign(LoginRoute.options, {
  path: "/login",
  getParentRoute: () => rootRoute,
})

Object.assign(ProfileRoute.options, {
  path: "/profile",
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
  LoginRoute,
  ProfileRoute,
  BrandsIndexRoute,
  BrandsBrandIdRoute,
])
