import React, { useRef } from 'react'
import './styles.css'

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;

}
export const InputField:React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    const inputRef=useRef<HTMLInputElement>(null)
  return (
    <form   className="input"
    onSubmit={(e) => {
      inputRef.current?.blur()
      handleAdd(e)
    }}
    >
        <input
        ref={inputRef}
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="Enter a todo"
        className="input__box"/>
         <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  )
}
