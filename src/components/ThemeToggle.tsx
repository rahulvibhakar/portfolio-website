
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      className={cn("relative overflow-hidden", className)}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <Sun className={cn(
        "h-5 w-5 transition-all",
        theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
      )} />
      <Moon className={cn(
        "absolute h-5 w-5 transition-all",
        theme === "light" ? "scale-100 rotate-0" : "scale-0 rotate-90"
      )} />
    </Button>
  );
}
