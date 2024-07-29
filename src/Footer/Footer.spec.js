import {render,screen} from '@testing-library/react'

import { Footer } from "./Footer";

describe('Footer components test',()=>{
    test("render correclty", async() => {
        render(<Footer/>)
        expect( await screen.getByText(/rights belongs to me/i)).toBeInTheDocument()
    })
})


