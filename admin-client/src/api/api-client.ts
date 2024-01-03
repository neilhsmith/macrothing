import axios from "axios"
import { serviceOptions } from "@/api/generated/index.defs"
import { applyAuthHeader } from "@/api/inteceptors"

export const apiClient = axios.create({
  baseURL: "https://localhost:5020",
})

apiClient.interceptors.request.use(applyAuthHeader)

// connect the axios instance to the generated api services
serviceOptions.axios = apiClient
