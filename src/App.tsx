import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/Header";

import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-w-full min-h-dvh bg-background flex justify-center items-center">
        <Header />
        <Outlet />
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
