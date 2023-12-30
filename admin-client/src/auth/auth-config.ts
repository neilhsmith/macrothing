import { Configuration, RedirectRequest } from "@azure/msal-browser"

export const msalConfig: Configuration = {
  auth: {
    clientId: "3ec541f2-da0f-49e9-bd9d-f33d56a62ed2",
    authority:
      "https://macrothing.b2clogin.com/macrothing.onmicrosoft.com/B2C_1_SignUpSignIn",
    knownAuthorities: ["macrothing.b2clogin.com"],
    redirectUri: "https://localhost:3061",
    postLogoutRedirectUri: "https://localhost:3061",
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

export const loginRequest: RedirectRequest = {
  scopes: ["openid"],
}

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
}
