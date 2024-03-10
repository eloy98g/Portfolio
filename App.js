import { useEffect } from "react";

// Navigation
import AppNavigator from "./src/navigation/AppNavigator";

// Theme
import { loadFonts } from "./src/theme/fonts";

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);

  return <AppNavigator />;
}
