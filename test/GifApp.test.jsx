import { getByText, render, screen } from '@testing-library/react';
import { GifApp } from '../src/GifApp';

describe('Pruebas en <GifApp />', () => {

  test('debe hacer match con el snapshot', () => {   
    const { container } = render(<GifApp />)
    expect(container).toMatchSnapshot();
  }) 

  test('debe cambiar el valor de la caja de texto', () => { 
    
      render( <GifApp /> );

      expect(screen.getByText("GifApp"));
   })




});