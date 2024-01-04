import "./index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "@/app"
import { msalClient } from "@/auth/msal"
import {
  AuthenticationResult,
  EventMessage,
  EventType,
} from "@azure/msal-browser"

msalClient.initialize().then(() => {
  const accounts = msalClient.getAllAccounts()
  if (accounts.length > 0) {
    msalClient.setActiveAccount(accounts[0])
  }

  msalClient.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult
      const account = payload.account
      msalClient.setActiveAccount(account)
    }
  })

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  )
  root.render(
    <React.StrictMode>
      <App msalClient={msalClient} />
    </React.StrictMode>
  )
})
