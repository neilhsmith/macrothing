import { TestsApi } from "@/api/generated/v1.0"
import { queryOptions } from "@tanstack/react-query"

const api = new TestsApi()

async function getHelloWorld() {
  const res = await api.helloWorld()
  return res.data
}

export const helloWorldQueryOptions = () =>
  queryOptions({
    queryKey: ["hello-world"],
    queryFn: () => getHelloWorld(),
  })
