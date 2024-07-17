import useLocalStorage from "./useLocalStorage";

function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);
  return (
    <>
      <div className="pageContainer">
        <h1>Hellow World!</h1>
        <button onClick={handleToggleTheme} className="changeThemeBtn">
          Change Theme
        </button>
      </div>
    </>
  );
}

export default LightDarkMode;
