import ContactsList from "@components/ContactsList/ContactsList"
import Filter from "@components/Filter/Filter"
import PhonebookForm from "@components/PhonebookForm/PhonebookForm"

const App = () => {
  return (
    <div className="text-black">
      <PhonebookForm />
      <Filter />
      <ContactsList />
    </div>
  )
}

export default App
