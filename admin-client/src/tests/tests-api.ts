import { queryOptions } from "@tanstack/react-query"
import { TestsService } from "@/api/generated/TestsService"

export const helloWorldQueryOptions = () =>
  queryOptions({
    queryKey: ["hello-world"],
    queryFn: () => TestsService.helloWorld(),
  })
