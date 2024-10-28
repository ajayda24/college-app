import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="fixed top-0 w-full bg-secondary  flex justify-between items-center p-4">
      <h1>College App</h1>
      <div>
        {theme == "light" ? (
          <Moon
            className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <Sun
            className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
