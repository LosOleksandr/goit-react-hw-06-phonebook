import { Contact } from "@interface/contacts"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "@reduxjs/toolkit"

const contactsInitialState: Contact[] = []

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action: PayloadAction<Contact>) {
        return [action.payload, ...state]
      },
      prepare(contact: { name: string; number: string }) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        }
      },
    },
    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload)
    },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions
export const contactsReducer = contactsSlice.reducer
