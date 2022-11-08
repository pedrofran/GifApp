import { render, screen } from "@testing-library/react"
import { GifItem } from "../../../../src/components/GidGrid/GifItem/GifItem";

describe('Pruebas en <GiftItem.jsx/>', () => { 
    const title = "titulo"
    const url = "https://www.google.com/"

    test('debe hacer match con el snapshot', () => {   
        const { container } = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
     }) 

     test('la imagen debe tener un url', () => {  

      render(<GifItem title={title} url={url} />)
      
      const {src, alt} = screen.getByRole('img')

      expect( src).toBe( url )

      expect( alt).toBe( title )
      
   })

 })