import { msalConfig } from "@/auth/auth-config"
import {
  InteractionRequiredAuthError,
  PublicClientApplication,
} from "@azure/msal-browser"

export const msalInstance = new PublicClientApplication(msalConfig)

export async function acquireApiAccessToken() {
  const request = {
    scopes: [
      "https://macrothing.onmicrosoft.com/macrothing-api/Api.Read",
      "https://macrothing.onmicrosoft.com/macrothing-api/Api.Write",
    ],
  }

  let tokenRes
  try {
    tokenRes = await msalInstance.acquireTokenSilent(request)
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      tokenRes = await msalInstance.acquireTokenPopup(request)
    }
  }

  return tokenRes?.accessToken
}
