import { FileRoute } from "@tanstack/react-router"
import { z } from "zod"

export const Route = new FileRoute("/_auth/brands/$brandId").createRoute({
  parseParams: ({ brandId }) => ({
    brandId: z.number().int().parse(Number(brandId)),
  }),
  stringifyParams: ({ brandId }) => ({
    brandId: `${brandId}`,
  }),
  component: BrandDetailComponent,
})

function BrandDetailComponent() {
  const { brandId } = Route.useParams()

  return <div>brand {brandId} details / edit & delete</div>
}
