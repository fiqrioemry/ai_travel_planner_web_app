/* eslint-disable react/prop-types */
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Logo from "@/components/Logo";
import { useTheme } from "@/hooks/useTheme";
import DarkModeToggle from "../DarkModeToggle";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Moon, PlusCircle, Sun } from "lucide-react";
import { useUser, SignOutButton } from "@clerk/clerk-react";

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
              <div className="flex items-center justify-between px-2 gap-2">
                <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
              </div>
              <a href="/sign-in">
                <Button>Sign In</Button>
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
  return (
    <div className="flex items-center gap-3">
      <a href="/resume/create-resume">
        <Button className="rounded-full px-4">
          <PlusCircle /> <span className="hidden md:block">resume</span>
        </Button>
      </a>

      <Popover>
        <PopoverTrigger>
          <img
            src={user?.imageUrl}
            alt={user?.fullName}
            className="h-9 w-9 rounded-full"
          />
        </PopoverTrigger>
        <PopoverContent className="w-48 p-2 space-y-4">
          <div className="font-semibold text-sm px-2">
            Halo, {user.fullName}
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              {isDark ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
              <span className="text-sm">
                {isDark ? "Dark Mode" : "Light Mode"}
              </span>
            </div>
            <Switch checked={isDark} onCheckedChange={toggleDark} />
          </div>

          <a href="resume">
            <Button className="w-full flex justify-start gap-2">
              My-resume
            </Button>
          </a>
          <Button>
            <SignOutButton />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};
