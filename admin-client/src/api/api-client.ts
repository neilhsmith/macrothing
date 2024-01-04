import axios from "axios"
import { applyAuthHeader } from "@/api/inteceptors"

export const SCOPES = {
  read: "https://macrothing.onmicrosoft.com/macrothing-api/Api.Read",
  write: "https://macrothing.onmicrosoft.com/macrothing-api/Api.Write",
} as const

export const apiClient = axios.create({
  baseURL: "https://localhost:5020",
})

apiClient.interceptors.request.use(applyAuthHeader)
