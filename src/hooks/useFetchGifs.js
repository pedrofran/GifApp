import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async(category) => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
     //esto se usa para no recargar la pagina mientras hago un cambio hacer un efecto secundario que se puede ejecutar solo cuando queramos pero que no se tiene que hacer cada vez
    useEffect( () => {
        getImages(category);
    }, [category]);



    return {
        images,
        isLoading
    }

}