import { setTheme } from "@app/ThemeSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectTheme } from "@app/selectors"

const ThemeToggler = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const toggleTheme = () => {
    theme.mode === "light"
      ? dispatch(setTheme("dark"))
      : dispatch(setTheme("light"))
  }

  return (
    <button onClick={toggleTheme} type="button">
      Toggle Theme
    </button>
  )
}

export default ThemeToggler
