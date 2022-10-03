import {useState} from 'react'
import { AddCategory, GifGrid } from './components'

export const GifApp = () => {
    const [categories, setCategories] = useState('')

    //const addCategory =  () => setCategories([...categories, "Asdf"])
    const onChangeCategory =  (changeCategory) => setCategories(changeCategory)

  return (
    <>
        <h1>GifApp</h1>

        <AddCategory setCategories={setCategories} 
            onChangeCategory={onChangeCategory}
        />

        
        <GifGrid category={categories}/>
    </>

  )
}
