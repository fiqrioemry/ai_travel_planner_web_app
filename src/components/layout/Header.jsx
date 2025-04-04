import Logo from "@/components/Logo";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/clerk-react";

function Header() {
  const { user } = useUser();

  return (
    <nav className="border-b py-4 px-6 md:px-0">
      <div className="container mx-auto flex items-center justify-between ">
        <a href="/">
          <Logo />
        </a>
        <div>
          {user ? (
            <UserButton />
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
