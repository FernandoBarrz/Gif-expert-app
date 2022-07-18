import { useState } from "react"
import AddCategory from "./components/AddCategory.jsx"
import GifGrid from "./components/GifGrid.jsx"







export default function GiftExpertApp() {

  const [categories, setCategories] = useState( ['One Punch'] )

  const onAddCategory = (categoryName) => {
    if (categories.includes(categoryName)) {
      return 
    }
    setCategories([categoryName, ...categories])
  }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory onNewCategory={onAddCategory}></AddCategory>
        {          
          categories.map((category) => (
              <GifGrid key={ category } category={ category }></GifGrid>               
            ))         
        }
        

    </>
  )
}
