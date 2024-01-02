import { LogoutButton } from "@/auth/auth-buttons"
import { useIsAuthenticated } from "@azure/msal-react"
import { Link } from "@tanstack/react-router"

export const Header = () => {
  const isAuthenticated = useIsAuthenticated()

  return (
    <header role="banner" className="border-b">
      <div className="container flex justify-between items-center py-2">
        <Link to="/" className="font-semibold text-2xl">
          Macrothing
        </Link>
        {isAuthenticated && (
          <nav role="navigation">
            <ul className="flex items-center gap-x-4">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <LogoutButton />
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
