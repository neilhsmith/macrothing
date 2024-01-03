import { ProblemDetails } from "@/api/generated"
import { QueryClient } from "@tanstack/react-query"

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
