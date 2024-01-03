import axios from "axios"
import { applyAuthHeader } from "@/api/inteceptors"

export const apiClient = axios.create({
  baseURL: "https://localhost:5020",
})

apiClient.interceptors.request.use(applyAuthHeader)
