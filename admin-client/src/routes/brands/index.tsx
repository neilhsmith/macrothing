import { safePaginationParamsSchema } from "@/api/pagination"
import { FileRoute } from "@tanstack/react-router"

export const Route = new FileRoute("/brands/").createRoute({
  component: BrandsIndexRouteComponent,
  validateSearch: safePaginationParamsSchema,
})

function BrandsIndexRouteComponent() {
  const { pageNumber, pageSize } = Route.useSearch()

  return (
    <div>
      brands index route component {pageNumber} - {pageSize}
    </div>
  )
}
