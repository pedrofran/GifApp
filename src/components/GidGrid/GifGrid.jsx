import { GifItem } from './GifItem/GifItem'
import { useFetchGifs } from '../../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    //esto se usa para no recargar la pagina mientras hago un cambio hacer un efecto secundario que se puede ejecutar solo cuando queramos pero que no se tiene que hacer cada vez

    const { images, isLoading } = useFetchGifs( category );


    return (
        <>
            <h3>{category}</h3>
                
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>
        </>
    )
    }
