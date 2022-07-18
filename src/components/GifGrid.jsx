

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export default function GifGrid( {category} ) {
  
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h6>{ category }</h6>

      {
        isLoading && <h3>Cargando...</h3>
      }

      <div className="card-grid">
          {
            images.map( (image) => (
              <GifItem key={image.id} {...image}>

              </GifItem>
            ))
          }
      </div>
    </>
  )
}
