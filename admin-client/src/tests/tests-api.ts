import { apiClient } from "@/api/api-client"
import { TestsApi } from "@/api/generated"
import { queryOptions } from "@tanstack/react-query"

const api = new TestsApi(undefined, "https://localhost:5020", apiClient)

async function getHelloWorld() {
  const res = await api.helloWorld()
  return res.data
}

export const helloWorldQueryOptions = () =>
  queryOptions({
    queryKey: ["hello-world"],
    queryFn: () => getHelloWorld(),
  })
