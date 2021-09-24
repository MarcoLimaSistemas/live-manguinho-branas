export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const serverError = (erro: Error): HttpResponse => ({
  statusCode: 500,
  data: erro.stack
})
export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data: data
})
