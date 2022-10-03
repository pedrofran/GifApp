import {useState} from 'react'

export const AddCategory = ({onChangeCategory}) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target}) => {
        
        const changeValue = target.value;

        setinputValue(changeValue)

        onChangeCategory(changeValue.trim()); 

    }



  return (
        <input  type="text" placeholder='Buscar Gifs' value={inputValue} onChange={onInputChange}/>
  )
}
