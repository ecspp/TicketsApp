export interface ValidationError {
  errors: {
    [field: string]: string[]
  },
  status: number,
  title: string,
  traceId: string
}
