import { setFilter } from "@app/FilterSlice"
import { useAppDispatch, useAppSelector } from "@app/hooks"
import { selectFilter } from "@app/selectors"
import { ChangeEvent } from "react"

const Filter = () => {
  const dispatch = useAppDispatch()
  const value = useAppSelector(selectFilter)

  return (
    <input
      className="border border-black"
      type="text"
      value={value}
      onChange={(evt: ChangeEvent<HTMLInputElement>) =>
        dispatch(setFilter(evt.target.value))
      }
    />
  )
}

export default Filter
