import { useAppSelector } from "@app/hooks"
import { selectTheme } from "@app/selectors"
import ContactsList from "@components/ContactsList/ContactsList"
import Filter from "@components/Filter/Filter"
import PhonebookForm from "@components/PhonebookForm/PhonebookForm"
import ThemeToggler from "@components/ThemeToggler/ThemeToggler"
import { useEffect, useRef } from "react"

const App = () => {
  const theme = useAppSelector(selectTheme)
  const HTMLRef = useRef(document.querySelector("html"))

  useEffect(() => {
    theme.mode === "light"
      ? HTMLRef.current?.classList.remove("dark")
      : HTMLRef.current?.classList.add("dark")
  }, [theme])

  return (
    <div className="text-black dark:text-blue-500">
      <PhonebookForm />
      <Filter />
      <ContactsList />
      <ThemeToggler />
    </div>
  )
}

export default App
