import { render, fireEvent, screen } from '@testing-library/react';
import { AddCategory } from '../../../src/components';

describe('Pruebas en <AddCategory />', () => {
  
  const valor = "pedro"

  test('debe cambiar el valor de la caja de texto', () => { 
    
      render( <AddCategory onChangeCategory={() => {}} /> );

      const input = screen.getByRole('textbox');

      fireEvent.input(input, {target: {value: valor}})

      expect(input.value).toBe(valor);
   })


  //submit del formulario no tengo onchangecategory

  test('debe llamar al onchange category si el input tiene un valor', () => { 
    
    const onChangeCategory = jest.fn();

    render( <AddCategory onChangeCategory={onChangeCategory} /> );

    const input = screen.getByRole('textbox');

    fireEvent.input(input, {target: {value: valor}})

    //expect( onChangeCategory ).toHaveBeenCalled();
    expect( onChangeCategory ).toHaveBeenCalledTimes(1);
    expect( onChangeCategory ).toHaveBeenCalledWith( valor );
   })

   /* test de prueba solo por el curso 
   test('no debe llamar al onchange category si el input no tiene un valor', () => { 
    
    const onChangeCategory = jest.fn();

    render( <AddCategory onChangeCategory={onChangeCategory} /> );

    const input = screen.getByRole('textbox');

    fireEvent.input(input, {target: {value: "fdas"}})
    fireEvent.input(input, {target: {value: ""}})
    //expect( onChangeCategory ).toHaveBeenCalled();
    expect( onChangeCategory ).toHaveBeenCalledTimes(2);

   })*/
});