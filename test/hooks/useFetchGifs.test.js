import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import { renderHook , waitFor} from '@testing-library/react';

describe('Pruebas en el hook useFetchGifs', () => { 
    test('dene de regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('hola') )

        const {images, isLoading} = result.current

        expect(images.length).toBe( 0 );
        expect(isLoading).toBeTruthy();

    });

    test('dene de regresar el arreglo de imagenes y el false', async () => {
        const { result } = renderHook( () => useFetchGifs('hola') )

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoading} = result.current

        expect(images.length).toBe( 10 );
        expect(isLoading).toBeFalsy();
    });
 })