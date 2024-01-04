import { SCOPES } from "@/api/api-client"
import {
  Configuration,
  InteractionRequiredAuthError,
  PublicClientApplication,
} from "@azure/msal-browser"

const msalConfig: Configuration = {
  auth: {
    clientId: "3ec541f2-da0f-49e9-bd9d-f33d56a62ed2",
    authority:
      "https://macrothing.b2clogin.com/macrothing.onmicrosoft.com/B2C_1_SignUpSignIn",
    knownAuthorities: ["macrothing.b2clogin.com"],
    redirectUri: "https://localhost:3061/oidc-callback",
    postLogoutRedirectUri: "https://localhost:3061/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  system: {
    allowNativeBroker: false, // Disables WAM Broker
  },
}

export const msalClient = new PublicClientApplication(msalConfig)

export const loginRequest = {
  scopes: [SCOPES.read, SCOPES.write],
}

export async function acquireApiAccessToken() {
  let tokenRes
  try {
    tokenRes = await msalClient.acquireTokenSilent({ ...loginRequest })
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      tokenRes = await msalClient.acquireTokenPopup({ ...loginRequest })
    }
  }

  return tokenRes?.accessToken
}
