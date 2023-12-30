export type ProblemDetail = {
  detail: string
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}
