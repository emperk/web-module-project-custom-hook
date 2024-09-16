import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

  console.log({darkMode});

  return [
    darkMode,
    setDarkMode
  ]
}