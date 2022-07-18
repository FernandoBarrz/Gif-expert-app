import { useState } from "react"


export default function AddCategory({onNewCategory}) {
    
    const [ inputValue, setInputValue ] = useState('Brand new element')
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length < 1) {
            return;
        }
        onNewCategory(inputValue.trim())
        
        setInputValue("");
    }
    
    const onInputChange = (e) => {
        setInputValue(e.target.value);
    }

  return (
    <form onSubmit={ onSubmit }>
        <input type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange= { onInputChange }
         />
    </form>
  )
}
