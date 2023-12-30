import { QueryClient } from "@tanstack/react-query"
import { ProblemDetail } from "@/api/types"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ProblemDetail
  }
}
