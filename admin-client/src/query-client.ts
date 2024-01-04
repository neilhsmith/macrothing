import { QueryClient } from "@tanstack/react-query"
import { ProblemDetails } from "@/api/generated/v1.0"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ProblemDetails
  }
}
