import { render, fireEvent, screen } from '@testing-library/react';
import { GifGrid } from '../../../src/components';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';

jest.mock('../../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {
  
  const valor = "pedro"

  test('debe tener todos los valores cuando no hay imagenes', () => { 

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render( <GifGrid category={valor} /> );
    screen.debug()
    expect( screen.getByText(valor)).toBeTruthy()
    expect( screen.getByText("Cargando...")).toBeTruthy()
   })

   test('debe tener todos los valores cuando hay imagenes', () => { 

    useFetchGifs.mockReturnValue({
      images: [
        {
          id:'ABC',
          title: 'Pedro',
          url: 'https://www.google.com/'
        },
        {
          id:'CBA',
          title: 'Salazar',
          url: 'https://www.google.com/'
        }
      ],
      isLoading: false,
    })

    render( <GifGrid category={valor} /> );

    expect(screen.getAllByRole("img").length).toBe(2);

   })


  //submit del formulario no tengo onchangecategory


});