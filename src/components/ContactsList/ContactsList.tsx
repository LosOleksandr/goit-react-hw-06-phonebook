import { deleteContact } from "@app/ContactsSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectContacts, selectFilter } from "@app/selectors"
import { Contact } from "@interface/contacts"

const ContactsList = () => {
  const dispatch = useAppDispatch()
  const contacts = useAppSelector(selectContacts)
  const filter = useAppSelector(selectFilter)

  const getVisibleContacts = (contacts: Contact[], filter: string) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filter.toLowerCase().trim()),
    )
  }

  const visibleContacts = getVisibleContacts(contacts, filter)

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name} <span>{number}</span>
          </p>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ContactsList
