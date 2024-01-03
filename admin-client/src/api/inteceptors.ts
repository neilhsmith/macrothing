import { InternalAxiosRequestConfig } from "axios"
import { acquireApiAccessToken } from "@/auth/msal"

export async function applyAuthHeader(config: InternalAxiosRequestConfig) {
  const accessToken = await acquireApiAccessToken()

  if (accessToken) {
    // FIXME: can headers actually be undefined here?
    config.headers!["Authorization"] = `Bearer ${accessToken}`
  }

  return config
}
