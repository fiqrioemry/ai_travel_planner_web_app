/* eslint-disable react/prop-types */
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Logo from "@/components/Logo";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { Moon, Sun, User, LogOut, FileText } from "lucide-react";

function Header() {
  const { user } = useUser();
  const { isDark, toggleDark } = useTheme();

  return (
    <nav className="border-b py-4 px-6 md:px-0">
      <div className="container mx-auto flex items-center justify-between ">
        <a href="/">
          <Logo />
        </a>
        <div>
          {user ? (
            <UserMenu user={user} isDark={isDark} toggleDark={toggleDark} />
          ) : (
            <div className="flex gap-2">
              <a href="/sign-in">
                <Button className="px-6 rounded-full">Get Started</Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;

const UserMenu = ({ user, isDark, toggleDark }) => {
  const menuItemClass =
    "flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer";

  return (
    <div className="flex items-center gap-3">
      <Popover>
        <PopoverTrigger>
          <img
            src={user?.imageUrl}
            alt={user?.fullName}
            className="h-9 w-9 rounded-full cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent className="w-56 py-3 p-2 space-y-2">
          <div className="font-semibold text-sm p-4 pb-1 text-gray-700 dark:text-gray-300">
            Hello, {user.fullName || "user guest"}
          </div>

          {/* Dark Mode Toggle */}
          <div onClick={toggleDark} className={menuItemClass}>
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
            <span>{isDark ? "Dark Mode" : "Light Mode"}</span>
          </div>

          {/* Profile */}
          <a href="/profile" className={menuItemClass}>
            <User size={18} />
            <span>Profile</span>
          </a>

          {/* Resume */}
          <a href="/resume" className={menuItemClass}>
            <FileText size={18} />
            <span>My Resume</span>
          </a>

          {/* Logout */}
          <div className={menuItemClass}>
            <LogOut size={18} />
            <SignOutButton signOutOptions={{ redirectUrl: "/" }} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
