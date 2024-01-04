import { LogoutButton } from "@/auth/auth-buttons"
import { Link } from "@tanstack/react-router"

export const Header = () => {
  return (
    <header role="banner" className="border-b">
      <div className="container flex justify-between items-center py-2">
        <Link to="/" className="font-semibold text-2xl">
          Macrothing
        </Link>
        <nav role="navigation">
          <ul className="flex items-center gap-x-4">
            <li>
              <Link to="/brands">Brands</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
