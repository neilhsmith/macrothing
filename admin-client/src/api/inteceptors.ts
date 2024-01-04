import { InternalAxiosRequestConfig } from "axios"
import { acquireApiAccessToken } from "@/auth/msal"

export async function applyAuthHeader(config: InternalAxiosRequestConfig) {
  const accessToken = await acquireApiAccessToken()

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`
  }

  return config
}
