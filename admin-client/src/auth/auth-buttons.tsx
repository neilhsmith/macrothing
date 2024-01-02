import { Button } from "@/components/ui/button"
import { BrowserUtils } from "@azure/msal-browser"
import { useMsal } from "@azure/msal-react"
import { LogOutIcon } from "lucide-react"

export const LogoutButton = () => {
  const { instance } = useMsal()

  return (
    <Button
      variant="destructive"
      size="icon-sm"
      onClick={() =>
        instance.logoutRedirect({
          account: instance.getActiveAccount(),
          onRedirectNavigate: () => !BrowserUtils.isInIframe,
        })
      }
    >
      <LogOutIcon size="20" />
    </Button>
  )
}
