import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "@/app"
import { msalInstance } from "@/auth/msal"
import {
  AuthenticationResult,
  EventMessage,
  EventType,
} from "@azure/msal-browser"

msalInstance.initialize().then(() => {
  const accounts = msalInstance.getAllAccounts()
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0])
  }

  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult
      const account = payload.account
      msalInstance.setActiveAccount(account)
    }
  })

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  )
  root.render(
    <React.StrictMode>
      <App pca={msalInstance} />
    </React.StrictMode>
  )
})
