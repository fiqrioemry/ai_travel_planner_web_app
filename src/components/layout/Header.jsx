import Logo from "@/components/Logo";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/clerk-react";
import DarkModeToggle from "@/components/DarkModeToggle";
import { User } from "lucide-react";

function Header() {
  const { isDark, toggleDark } = useTheme();
  const { user } = useUser();

  return (
    <nav className="border-b py-4 px-6 md:px-0">
      <div className="container mx-auto flex items-center justify-between ">
        <a href="/">
          <Logo />
        </a>

        <div className="flex gap-2">
          <div className="flex items-center justify-between">
            <DarkModeToggle isDark={isDark} toggleDark={toggleDark} />
          </div>
          {user ? (
            <div className="flex gap-2">
              <a href="/dashboard">
                <Button className="px-4 rounded-full">
                  <User />
                  resume
                </Button>
              </a>
              <UserButton />
            </div>
          ) : (
            <div>
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
