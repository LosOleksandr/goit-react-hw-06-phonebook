import { ErrorMessage } from "@hookform/error-message"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import validationSchema from "./validationSchema"
import { useAppDispatch } from "@app/hooks"
import { addContact } from "@app/ContactsSlice"

type PhonebookFormFields = {
  name: string
  number: string
}

const PhonebookForm = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PhonebookFormFields>({ resolver: yupResolver(validationSchema) })

  const onSubmit = (data: PhonebookFormFields) => {
    dispatch(addContact(data))
    reset()
  }
  
  return (
    <form action="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input
          className="border border-black"
          type="text"
          {...register("name")}
        />
        <ErrorMessage name="name" errors={errors} />
      </label>
      <label>
        Phone
        <input
          className="border border-black"
          type="tel"
          {...register("number")}
        />
        <ErrorMessage name="number" errors={errors} />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  )
}

export default PhonebookForm
